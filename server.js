const { log } = require("console");
const express = require("express");

	const app = express();

	const fs = require("fs");
    const path = require("path");
  

fs.writeFile("./datatime.txt", ` ${new Date()}`,
 function(err){
    if(err) throw err;
    console.log("saved");
});

app.get("./newfile",(req,res)=>{
    res.json(new Date())

})

app.get("/getallfiles",(req,res)=>{

 let data = fs.readdirSync(path.join(__dirname,"files"));
console.log(data);
let files = [];
data.forEach(file => {
    files.push({
        time:fs.readFileSync(path.join(__dirname,"files",file),'utf8')
    })})
console.log(files);
res.json(files)

})

app.listen(3003);