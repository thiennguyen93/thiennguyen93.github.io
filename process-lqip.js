const lqip = require('lqip-modern')
const fs = require('fs/promises');
const stdFs = require('fs')
var path = require('path')


async function processLQIP() {
    const lqipDir = "lqip/"
    const dir =  __dirname + "/assets/img/"
    let files = await fs.readdir(dir,  {
        withFileTypes: true
    });
    // Filter all image file
    imgFiles = files?.map(item =>{
        const ext = path.extname(dir + item.name)
        return {
            name:  item.name,
            ext
        }
    })
    .filter(({ext})  =>  {
        return [".png",".jpg",".jpeg",".webp"].includes(ext)
    })

    // remove current lqip  sdir
    await fs.rm(dir + lqipDir, { force: true, recursive: true });
    await fs.mkdir(dir + lqipDir);
    
    for await (fileItem of imgFiles) {
        const { name, ext } = fileItem
        const result = await lqip(dir + name, {
            resize: 320,
        })
        fs.writeFile(
          dir + "lqip/" + (name + "_temp").replace(ext + "_temp", "") + ".webp",
          result.content
        );
    }
}
processLQIP()
