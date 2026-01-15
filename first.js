console.log("Node.js Backend Started");

let name ="Shashank"; // Make a String Variable
let age=20;  // Make a int Variable
const country = "India"; // Make a global Variable
let isStudent = true;  // Make a Boolean Variable

console.log(name);
console.log(age);
console.log(country); // this print or give O/P
console.log(isStudent);

let a = 10;
let b = 5;

console.log("Add:" , a + b); // This add the Two No. of a and b 
console.log("Sub:" , a - b); //This subtract the Two No.
console.log("Mul:" , a * b); //This multiply the Two No.
console.log("Div:" , a / b); //This divide the Two No.

let loginAge = 18;

if(loginAge >= 18){    // this check the condition if this satisfy the condition then print and if not satisfy then go to else if or else
    console.log("Allowed to Login");
}
else{           
    console.log("Not Allowed");
}


// Loop
for(let i = 1; i <= 5; i++){     // this loop start from 1 to 5
    console.log("Loop Count:",i);
}

// Function
function add(x,y){    // this is a function to add two no. 
    return x+y;
}

let result = add(20,30); // these value go to the function 
console.log("Function Result:" , result); // this line print the ans of the function 


// Simple Backend login
const admin = {
    username:"Admin",
    password:"1234"
};


function login(user,pass){
    if(user ===admin.username && pass === admin.password ){
        console.log("login Successful");
    }else{
        console.log("Invalid username or password");
    }
}
login("admin","1234");