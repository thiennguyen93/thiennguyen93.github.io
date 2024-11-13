import dotenv from 'dotenv';
import { exec } from 'child_process';
import { promisify } from 'util';

dotenv.config();
const execPromise = promisify(exec);

const postInstallCustomTheme = `npm install git+https://${process.env.GH_TOKEN}:x-oauth-basic@github.com/thiennguyen93/${process.env.GH_PRIVATE_THEME_REPOSITORY} hexo-tag-aplayer@git+https://github.com/thiennguyen93/thiennguyen-hexo-tag-aplayer --no-save`;
console.log("@@@postInstallCustomTheme")
async function installCustomTheme() {
    try {
        const { stdout, stderr } = await execPromise(postInstallCustomTheme);
        
        console.log("Custom theme installed successfully");
        console.log(`stdout: ${stdout}`);
        if (stderr) {
            console.error(`stderr: ${stderr}`);
        }
    } catch (error) {
        console.error(`exec error: ${error}`);
    }
}

installCustomTheme();
