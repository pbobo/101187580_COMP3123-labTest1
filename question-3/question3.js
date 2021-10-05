// prendi bobo - 101187580 
let fileSystem = require('fs')
var path = require('path')
const dirPath = "./Logs/"
//var fname = path.basename(dirPath)

// writting files
box = 1;
while (box <= 10)
{
    if (fileSystem.existsSync(dirPath)) {
        fileSystem.writeFileSync(dirPath+`/Log${box}.txt`, "This was created by Prendi Bobo")  
        console.log(`Log${box}.txt`)
    } else {
        console.log("not working")
    }
    box = box + 1
}

// deleting files
box2 = 1;
while (box2 <= 10)
{
    if (fileSystem.existsSync(dirPath + `/Log${box2}.txt`)) {
        fileSystem.unlinkSync(dirPath + `/Log${box2}.txt`);
        console.log(`deleted files...Log${box2}.txt`)
    } else {
        console.log("not working")
    }
    box2 = box2 + 1
}



