const prompt = require('prompt-sync')();

// problem 1
// let num=[90,3,4,5]
// let x=Number.parseInt(prompt("Enter the number:"))
// num.push(x)
// console.log(num)

// problem 2
// let num = [90, 3, 4, 5]
// let x
// do{
//   x = Number.parseInt(prompt("Enter the number:"))
//   num.push(x)
// }while (x != 0) 
// console.log(num)

// problem 3
// let num = [90, 3, 40, 5]
// let a=num.filter((value)=>{
//   return value%10==0
// })
// console.log(a)

// problem 4
// let num = [9, 3, 4, 5]
// let a=num.map((value)=>{
//   return value*value
// })
// console.log(a)

// problem 5
let num = [1,2,3,4,5]
let a=num.reduce((value1,value2)=>{
  return value1*value2
})
console.log(a)
