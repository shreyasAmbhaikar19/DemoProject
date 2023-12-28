/*
console.log("Execution start");
function abc(){
    console.log("abc function");
}

// function xyz(fun){
//     console.log("xyz function");
//     fun();
// }

// asynchronus function
setTimeout(() => {
    console.log("In setOut fun");
    abc();
}, 4000);

// xyz(abc);
console.log("Execution end");
*/

/*
console.log("Execution start");
function get_msg(){
    console.log("In get_message function");
    setTimeout(()=>{
        let msg = "Cybage Software PVT LTD";
        return msg;
    },5000)
}

let message=get_msg();
console.log("Message: ",message);
console.log("Execution end");
*/


/*
let promise = new Promise((resolve, reject)=>{
    let val=true;
    if (val){
        resolve("Process Executed")
    }
    else{
        reject("Process Terminated")
    }
})
promise.then((response)=>{console.log("In then section",response);})
        .catch((error)=>{console.log("In catch section",error);})
*/

/*
console.log("Execution start");
function get_msg(){
    console.log("In get_message function");
    let p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let msg="Cybage Software Pvt Ltd"
            resolve("Company: "+msg)
        },5000)
    })
    return p;
}

async function process(){
    let msg =await get_msg();
    console.log(msg);
}

process();

// get_msg().then((result)=>{console.log("Message",result);})
// .catch((error)=>{console.log("Error",error);});
// console.log("Execution end");

*/

