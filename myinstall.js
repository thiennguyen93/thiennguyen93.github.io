const { exec } = require('child_process');
exec('npm install dotenv').on('exit', () => exec('npm run mypostinstall'));