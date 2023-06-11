const path = require('path');
const fs = require('fs').promises;

async function imageToBase64TextFile(imgPath, outputName) {
    
    // resolve the path to current directory
    const normalizedPath = path.resolve(__dirname, path.normalize(imgPath));

    try {
        // First get the bitmap version of the image file
        const bitmapImage = await fs.readFile(normalizedPath);

        // Next convert bitmap to buffer, and convert buffer to a string in base64 format
        const base64Image = Buffer.from(bitmapImage).toString('base64');

        //NEXT WE WRITE THE FILE HAHAHAHAHA
        const write = fs.writeFile(`${outputName}.txt`, base64Image);

        await write;

        const imgTextFileStats = await fs.stat(`${outputName}.txt`);

        imgTextFileSizeKB = imgTextFileStats.size / 1024;

        console.log(`Image text file successfully created with a size of ${imgTextFileSizeKB}kb`);
    }
    catch(error) {
        console.log(error);
    }
}

(async () => {
    imageToBase64TextFile('./img/phpinjavascript.png', 'img');
})();