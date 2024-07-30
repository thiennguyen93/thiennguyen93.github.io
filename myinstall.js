const { exec } = require('child_process');
exec('npm install dotenv').on('exit', () => exec('npm run mypostinstall', function(err, stdout, stderr) {
    if (err) {
      console.log("Da co loi xay ra!!!");
    }
    console.log("Custom theme installed successfully")
    console.log(stdout);
  })  
);