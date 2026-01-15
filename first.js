console.log("Node.js Backend Started");

let name ="Shashank";
let age=20;
const country = "India";
let isStudent = true;

console.log(name);
console.log(age);
console.log(country);
console.log(isStudent);

let a = 10;
let b = 5;

console.log("Add:" , a + b);
console.log("Sub:" , a - b);
console.log("Mul:" , a * b);
console.log("Div:" , a / b);

let loginAge = 18;

if(loginAge >= 18){
    console.log("Allowed to Login");
}
else{
    console.log("Not Allowed");
}


// Loop
for(let i = 1; i <= 5; i++){
    console.log("Loop Count:",i);
}

// Function
function add(x,y){
    return x+y;
}

let result = add(20,30);
console.log("Function Result:" , result);


// Simple Backend login
const admin = {
    username:"Admin",
    password:"1234"
};