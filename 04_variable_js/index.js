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
        console.log("server fetching")
        resolve();
    })
})

.then(() =>{
    console.log("Server sucessfully fetching")
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("Finally here ")
})

const promiseThree = new Promise((resolve, reject)=>{
    setInterval(() => {
        let item = null;
        resolve();
    }, 2000);
})

promiseThree.then(() => {
    console.log("Server is loading")
})
promiseThree.catch((error) => {
    console.log("error")
})
promiseThree.finally(() => {
    console.log("Finally here")
})

const promiseFour = new Promise((resolve, reject)=>{
    let items = null;
    setInterval(() =>{
        if(items = null) {
            console.log("item sucessfully extracted")
            resolve()
        } else {
            reject()
        }
    }, 2000)
})

promiseFour.then((user) => {
    console.log("Server is loading")
})
promiseFour.catch((error) => {
    console.log("error")
})
promiseFour.finally(() => {
    console.log("Finally here")
}) 

const promiseSix = new Promise((resolve, reject) => {
    setInterval(() => {
        console.log("compile the server")
    }, 2000)

})

let userId = "singhashish82103@gmail.com";
let userPassword = "34@singh";
let userLoggedIn = false;

if(userId === "<EMAIL>") { 
    console.log(userId)
} else if(userPassword === "<PASSWORD>") {
    console.log(userId)
} else if (userLoggedIn === "<USER LOGGED IN") {
    console.log(userLoggedIn)
} else {
    console.log("Please enter a valid email")
}

const instantValue = false;
if (instantValue === false) {
    console.log("This is the value of boolean type variable")
} else {
    console.log("Please check your code again")
}

// URL of the GitHub API endpoint
const apiUrl = 'https://api.github.com/users/ashishsingh82103';

// Making a GET request using the Fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log('User Data:', data); // Handle the data from the API
  })
  .catch(error => {
    console.error('Error fetching data:', error); // Handle any errors
  });

  const user = "https://api.github.com/users/ashishsingh82103";

  fetch(user)
  .then(response =>{
    if(!response.ok) {
        throw new error("finally get some error")
    }
    return response.json()

  })
  .then(data => {
    console.log("User data", data)
  })
  .catch(error =>{
    console.log("Error fetching issue", error)
  })

let directory = document.getElementById("box1");
// console.log(directory);

directory.onclick = () => {
    console.log("directory is executed")
    let a = 25;
    a++;
    console.log(a);
}

let item2 = document.getElementById("box2");
item2.onclick = () => {
    console.log("event successfully of box-2")
    let a = 5;
    a--;
    console.log(a);
}

let item3 = document.getElementById("box3");

item3.onclick = () => {
    console.log("event is successfully of box-3")

    let a = 2
    a = a * 2
    console.log(a)

}

let enquiry = document.getElementById("box2");
enquiry.onclick = (e) => {
    console.log(e);
}

let modebtn = document.querySelector("#mode");
let currMode = "light";
modebtn.addEventListener('click', () => {
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "pink";
    }
    console.log(currMode);
})

