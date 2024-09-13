const fs=require("fs")

setImmediate(()=>{
    console.log("setImmediate");
})
setTimeout(() => {
    console.log("Timer Expired");
    
}, 0);
Promise.resolve("Promise").then(console.log)

fs.readFile("./file.txt","utf8",(err,data)=>{  
    console.log("File reading Completed");
  })

process.nextTick(()=>{e
    process.nextTick(()=>console.log("2nd nextTick"))
    console.log("process.nextTick")
})
console.log("Last line of the program");
