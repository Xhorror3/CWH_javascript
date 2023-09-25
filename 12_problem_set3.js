const prompt=require('prompt-sync')();
// problem no 1
let marks = {
    harry: 90,
    shubham: 98,
    bhariav: 23,
    jadish: 12,
  }
for (let i = 0; i < Object.keys(marks).length; i++) {
    // console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }

//   problem no 2
for(let key in marks){
    // console.log("The marks of "+key+" are "+marks[key])
}
// problem no 3]
// let num=43
// let a
// while(a !=num){
//     console.log("Invalid Input!")
//     a=prompt("Enter the number:")
// }
// console.log("You entered a correct number!")

// problem no 4

const mean=(a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(1,2,3,4))
