// https://hexo.io/api/injector#content-inner

const script = `
<script>
  console.log("Copyright © 2023 Thien Nguyen")
</script>
`

hexo.extend.injector.register(
    "body_end",
    () => {
        return script;
    },
    "page"
);