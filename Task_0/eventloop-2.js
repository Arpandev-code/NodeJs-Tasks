const fs= require("fs")
const a=100
setImmediate(()=>{
    console.log("SetImmediate");
    
})
Promise.resolve("Promise").then(console.log)
fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File reading Completed");
    
})
setTimeout(() =>{
    console.log("setTimeout called");
},0)
process.nextTick(()=>{
    console.log("process.nextTick");
})
function printA(){
    console.log("a=",a);
}
printA()
console.log('Last line of the program');