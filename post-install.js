require('dotenv').config();
const { exec } = require('child_process');
// npm install git+https://${GH_TOKEN}@github.com/thiennguyen93/${GH_PRIVATE_THEME_REPOSITORY}
const postInstallCustomTheme = `npm install git+https://${process.env.GH_TOKEN}@github.com/thiennguyen93/${process.env.GH_PRIVATE_THEME_REPOSITORY}`;
console.log("run this:" + postInstallCustomTheme);
console.log("GH_TOKEN:" + process.env.GH_TOKEN);
exec(postInstallCustomTheme, function(err, stdout, stderr) {
    if (err) {
      console.log("Da co loi xay ra!!!");
    }
    console.log(stdout);
  });
  