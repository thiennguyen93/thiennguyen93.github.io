require('dotenv').config();
const { exec } = require('child_process');
// npm install git+https://${GH_TOKEN}@github.com/thiennguyen93/${GH_PRIVATE_THEME_REPOSITORY}
const postInstallCustomTheme = `npm install git+https://${process.env.GH_TOKEN}@github.com/thiennguyen93/${process.env.GH_PRIVATE_THEME_REPOSITORY} --no-save`;
exec(postInstallCustomTheme, function(err, stdout, stderr) {
    if (err) {
      // handle error
      console.log(stderr)
    //   exec("npm install git+https://${GH_TOKEN}@github.com/thiennguyen93/${GH_PRIVATE_THEME_REPOSITORY}", function(err1, stdout1, stderr1 ){
    //       if (err1) {
    //           console.log('Handle error on netlify');
    //       }
    //       console.log('success');
    //   })
    }
    console.log(stdout);
  });
  