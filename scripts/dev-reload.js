/* global hexo */
// Dev only (hexo server): pick up theme JSX edits without restarting, and refresh the browser after each regenerate.
// hexo-renderer-inferno compiles views with require(), so edited .jsx files stay in Node's require cache until restart.
const fs = require("fs");
const path = require("path");

const isServer = () => hexo.extend.console.alias[hexo.env.cmd] === "server";
const liveReloadPath = hexo.config.root + "__livereload";
const bootId = Date.now().toString();
const clients = new Set();
let ready = false;
let reloadTimer = null;

function realDir(dir) {
  return fs.realpathSync(dir) + path.sep;
}

function reloadThemeViews() {
  const componentDir = realDir(path.dirname(require.resolve("hexo-component-inferno/package.json")));
  // hexo-component-inferno is cleared too: its cacheComponent() keeps vnodes of the old component classes
  const dirs = [realDir(hexo.theme_dir), componentDir];

  Object.keys(require.cache)
    .filter((file) => dirs.some((dir) => file.startsWith(dir) && !file.slice(dir.length).includes("node_modules")))
    .forEach((file) => delete require.cache[file]);

  // A fresh copy of core/view lost the theme dir set by include/register.js
  require(path.join(componentDir, "lib/core/view")).init(hexo);

  const { views } = hexo.theme;
  Object.keys(views).forEach((name) => {
    const view = views[name][".jsx"];
    if (!view) return;
    try {
      view._precompile();
    } catch (err) {
      hexo.log.error({ err }, "Failed to recompile view: %s", view.path);
    }
  });
  hexo.log.info("Theme views reloaded");
}

hexo.theme.on("processAfter", ({ path: file }) => {
  if (!ready || !isServer() || !/^(layout|include)\//.test(file)) return;
  // Runs before Hexo's own 100ms regenerate debounce, so the next render uses fresh views
  clearTimeout(reloadTimer);
  reloadTimer = setTimeout(reloadThemeViews, 50);
});

hexo.on("generateAfter", () => {
  if (!ready) {
    ready = true;
    return;
  }
  clients.forEach((res) => res.write("data: reload\n\n"));
});

hexo.extend.filter.register(
  "server_middleware",
  (app) => {
    app.use(liveReloadPath, (req, res) => {
      res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      });
      res.write(`data: ${bootId}\n\n`);
      clients.add(res);
      req.on("close", () => clients.delete(res));
    });
  },
  1
);

// A different boot id after reconnecting means the server was restarted, so reload as well
hexo.extend.injector.register("body_end", () => {
  if (!isServer()) return "";
  return `
    <script>
    (() => {
      let bootId;
      new EventSource("${liveReloadPath}").onmessage = (event) => {
        if (event.data === "reload" || (bootId && bootId !== event.data)) location.reload();
        bootId = event.data;
      };
    })();
    </script>
    `;
});
