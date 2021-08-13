require('dotenv').config();
var exec = require('child_process').exec;
// npm install git+https://${GH_TOKEN}@github.com/thiennguyen93/${GH_PRIVATE_THEME_REPOSITORY}
const postInstallCustomTheme = `npm install git+https://${process.env.GH_TOKEN}@github.com/thiennguyen93/${process.env.GH_PRIVATE_THEME_REPOSITORY}`;
var cmd = exec(postInstallCustomTheme, function(err, stdout, stderr) {
    if (err) {
      // handle error
    }
    console.log(stdout);
  });
  