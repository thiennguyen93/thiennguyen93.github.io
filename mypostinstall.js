require('dotenv').config();
const { exec } = require('child_process');
const postInstallCustomTheme = `npm install git+https://${process.env.GH_TOKEN}@github.com/thiennguyen93/${process.env.GH_PRIVATE_THEME_REPOSITORY} --no-save`;
exec(postInstallCustomTheme, function(err, stdout, stderr) {
    if (err) {
      console.log("Da co loi xay ra!!!");
    }
    console.log("Custom theme installed successfully")
    console.log(stdout);
  });
  
