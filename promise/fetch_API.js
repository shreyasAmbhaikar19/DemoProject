function getEmployee(){
    return new Promise((resolve,reject)=>{
        fetch("http://localhost:3000/employee")
        .then(result=>{
            resolve(result.json())
        })
        .catch(error=>{
            reject(error)
        })
    })
    
}

getEmployee().then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})