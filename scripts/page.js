// https://hexo.io/api/injector#content-inner
const css = hexo.extend.helper.get('css').bind(hexo);
const js = hexo.extend.helper.get('js').bind(hexo);

const ghSHA = process.env.github.GH_SHA
const script = `
<script>
  console.log("Copyright © 2023 Thien Nguyen${ghSHA?`-${sha}`:""}")
</script>
`

hexo.extend.injector.register(
    "body_end",
    () => {
        return script;
    },
    "page"
);


hexo.extend.injector.register(
  "body_end",
  () => {
      return `
      <script>
      if (document.querySelector(".navbar-item.is-active[href='/categories/music']") || document.querySelector(".navbar-item.is-active[href='/categories/nhac']")) {
        document.querySelector(".navbar-item.is-active[href='/categories']").classList.remove("is-active")
      }
      </script>
      `;
  },
  "category"
);

// Thien Nguyen Custom... Inject aplayer dependencies CSS, JS
hexo.extend.injector.register('head_end', () => {
  return css('/assets/css/APlayer.min.css');
}, 'default');


hexo.extend.injector.register('head_end', () => {
  return js('/assets/js/APlayer.min.js');
}, 'default');