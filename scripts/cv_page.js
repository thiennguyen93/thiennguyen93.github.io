
const contactFormScript = `
<script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
<script>
  var typed = new Typed('#typed', {
    strings: ['<strong>software engineer<strong>^1000','<strong>web developer<strong>^1000','<strong>writer<strong>^1000'],
    typeSpeed: 40,
    loop: true,
    loopCount: Infinity,
  });
</script>
`

hexo.extend.injector.register(
    "body_end",
    () => {
        return contactFormScript;
    },
    "cv_page"
);