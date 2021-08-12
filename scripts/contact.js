
const contactFormScript = `
<script>
    console.log('test contact form script');
</script>
`

hexo.extend.injector.register(
    "body_end",
    () => {
        return contactFormScript;
    },
    "contact"
);