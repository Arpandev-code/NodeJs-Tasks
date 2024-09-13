const fs= require("fs")

const a=100
 setImmediate(()=>{
     console.log("SetImmediate");
 })

 fs.readFile("./file.txt","utf8",(err,data)=>{  
     console.log("File reading Completed");
   })
setTimeout(() => {
    console.log("setTimeout called");
}, 0);
function printA(){
    console.log("a=",a);
}
printA()
console.log('Last line of the program');

