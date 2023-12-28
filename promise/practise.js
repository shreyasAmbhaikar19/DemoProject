/*
console.log("execution started");

function abc(){
    console.log("ABC function");
}

setTimeout(() => {
    console.log("In setTimeout function");
    abc();
}, 4000);

console.log("Execution end");

*/

/*
let promise = new Promise((resolve, reject)=>{
    let val=true;
    if(val){
        resolve("Process executed")
    }
    else{
        reject("Process terminated")
    }
})
promise.then((response)=>{console.log("In then section", response);})
        .catch((error)=>{console.log("In cathc section",error);})
*/

/*
console.log("Execution started");
function abc(){
    console.log("In ABC Function");
    let p = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let msg = "Cybage Software Pvt Ltd"
            resolve("Message "+msg)
        })
    })
    return p;
}

async function process(){
    let msg = await abc();
    console.log(msg);
}

process();
*/

function getEmployee(){
    return new Promise((resolve,reject)=>{
        fetch("http://localhost:3000/employee")
        .then(res)
    })
}