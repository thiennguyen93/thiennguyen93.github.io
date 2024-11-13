import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

async function installPackages() {
    try {
        // Cài đặt dotenv
        await execPromise('npm install dotenv');
        console.log("dotenv installed successfully");

        // Chạy lệnh mypostinstall
        const { stdout, stderr } = await execPromise('npm run mypostinstall');

        if (stderr) {
            console.error("Error occurred during mypostinstall:", stderr);
        } else {
            console.log("Custom theme installed successfully");
            console.log(stdout);
        }
    } catch (err) {
        console.error("Đã có lỗi xảy ra!!!", err);
    }
}

installPackages();
