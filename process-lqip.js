import lqip from 'lqip-modern';
import fs from 'fs/promises';
import path from 'path';

const lqipDir = "lqip/";
const dir = new URL("./assets/img/", import.meta.url).pathname;

async function processLQIP() {
    let files = await fs.readdir(dir, {
        withFileTypes: true
    });

    // Filter all image files
    const imgFiles = files
        .map(item => {
            const ext = path.extname(item.name);
            return {
                name: item.name,
                ext
            };
        })
        .filter(({ ext }) => {
            return [".png", ".jpg", ".jpeg", ".webp"].includes(ext);
        });

    // Remove current lqip directory
    await fs.rm(path.join(dir, lqipDir), { force: true, recursive: true });
    await fs.mkdir(path.join(dir, lqipDir));

    for (const fileItem of imgFiles) {
        const { name, ext } = fileItem;
        const result = await lqip(path.join(dir, name), {
            resize: 1200,
            outputFormat: "webp"
        });
        await fs.writeFile(
            path.join(dir, lqipDir, (name + "_temp").replace(ext + "_temp", "") + ".webp"),
            result.content
        );
    }
}

processLQIP().catch(console.error);
