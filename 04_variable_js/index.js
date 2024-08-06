console.log("This is for js");
const promiseOne = new Promise((resolve, reject) =>{
    setInterval(()=>{
        console.log("This is server passing")
        resolve();
    }, 2000)
})

promiseOne.then((user) =>{
    console.log("server is geti")

})
promiseOne.catch((error) =>{
    console.lopg("Error")
})
promiseOne.finally(()=>{
    console.log("result is finally here ")
})

new Promise((resolve, reject) => {
    setInterval(()=>{
        
    })
})