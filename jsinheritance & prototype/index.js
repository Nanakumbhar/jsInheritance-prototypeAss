//1. Question no:1- Create 2 objects - parent and child. Attach methods to parent and
//  use those methods in child object using parents prototype

const parent ={
    name:"sagar",
    age:60,

}

const child={
    name:"ram",

}

child.__proto__=parent;

console.log(child.age);
// console.log(child.showDetails());

//2. Write code to explain prototype chaining

let arr=[1,2,3];
let kk=[34,56];
console.log(arr.__proto__ == kk.__proto__)
// Ans=>true
// Array.prototype=> Object;Object.prototype => Object;Object.prototype=>Null 


// //3. Add a method to calculate sum of all elements
//  in Array in array's protype, use that method to calculate sum for multiple arrays

let Arr=[1,2,3,]
let summ=0
for (let i=1;i<Arr.length;i++){
    
    summ=summ+Arr[i]
    }
console.log(summ)

// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function func1(){
    this.firstName="nana"
    this.lastName="kumbhar"
}
function func2(){
    this.collegeName="Rp"
    func1.call(this)
}
let student = new func2()
console.log(student)