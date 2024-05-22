// https://hexo.io/api/injector#content-inner
const css = hexo.extend.helper.get("css").bind(hexo);
const js = hexo.extend.helper.get("js").bind(hexo);

const ghSHA = process.env.GH_SHA;
const script = `
<script>
  console.log("Copyright © 2023 Thien Nguyen ${ghSHA}")
</script>
`;

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

// Fixed issue not active home when under route /page/2  or /page/3, ...
hexo.extend.injector.register(
  "body_end",
  () => {
    return `
      <script>
      if (/^\\/page\\/\\d/.test(window.location.pathname)) {
        document.querySelector(".navbar-start>.navbar-item[href='/']").classList.add('is-active')
      }
      </script>
      `;
  },
  "home"
);

// Thien Nguyen Custom... Inject aplayer dependencies CSS, JS
hexo.extend.injector.register(
  "head_end",
  `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-S8T504QJK6"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-S8T504QJK6');
</script>
  `
);

// Thien Nguyen Custom... Inject aplayer dependencies CSS, JS
hexo.extend.injector.register(
  "body_end",
  () => {
    // return css('/assets/css/APlayer.min.css'); // without CDN
    return js(
      // "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.js"
      // "/assets/js/minimasonry.min.js"
      "/assets/js/macy.js"
      // "https://cdn.jsdelivr.net/npm/macy@2"
    ); // CDN
  },
  "category"
);
// Thien Nguyen Custom... Inject aplayer dependencies CSS, JS
hexo.extend.injector.register(
  "body_end",
  () => {
    return `
      <script>
      const isFeaturedCategoryPhotoAlbum = !!document.querySelector(".photo-album-columns");
      if (isFeaturedCategoryPhotoAlbum) {
        var macy = new Macy({
            container: '.photo-album-columns',
            trueOrder: false,
            waitForImages: false,
            margin: 0,
            columns: 2,
            breakAt: {
                1200: 2,
                940: 2,
                520: 2,
                400: 1
            }
        });
      };
      </script>
      `;
  },
  "category"
);

// 
hexo.extend.injector.register(
  "head_end",
  () => {
    return css(
      "https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css"
    ); // CDN
  },
  "default"
);

// Import multipe css files from config
const { thiennguyen } = hexo?.config;
if (thiennguyen?.useStyles?.length) {
  thiennguyen?.useStyles?.forEach((item) => {
    hexo.extend.injector.register("head_end", () => {
      return css(item);
    });
  });
}

// Inject APlayerJS (CDN/non-CDN)
hexo.extend.injector.register(
  "body_begin",
  '<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>\n'
);
// hexo.extend.injector.register('head_end', () => {
//   return js('/assets/js/APlayer.min.js');
// }, 'default');
