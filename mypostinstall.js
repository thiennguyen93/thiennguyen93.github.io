require("dotenv").config();
const { exec } = require("child_process");
const postInstallCustomTheme = `npm install git+https://${process.env.GH_TOKEN}@github.com/thiennguyen93/${process.env.GH_PRIVATE_THEME_REPOSITORY} hexo-tag-aplayer@git+https://github.com/thiennguyen93/thiennguyen-hexo-tag-aplayer --no-save`;
exec(postInstallCustomTheme, function (err, stdout, stderr) {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log("Custom theme installed successfully");
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
