const fs= require("fs")

setImmediate(()=>{
    console.log("setImmediate");
    
})
setTimeout(() => {
    console.log("1st Timer Expired");
    
}, 0);
Promise.resolve("Promise").then(console.log)
fs.readFile("./file.txt","utf8",(err,data)=>{
    setTimeout(() => {
        console.log("2nd Timer Expired");
    }, 0);
    process.nextTick(()=>console.log("2nd nextTick"))
    setImmediate(()=>{
        console.log("setImmediate");
    })
})
console.log("Last line of the program");

