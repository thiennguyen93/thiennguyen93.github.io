const { exec } = require('child_process');
exec('npm install').on('exit', () => exec('npm run mypostinstall'));