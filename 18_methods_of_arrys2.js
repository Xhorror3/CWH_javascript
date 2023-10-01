// delete method

// let num=[11,2,3,4,5]
// delete num[0]
// console.log(num)

//concat method

// let num1=[1,2,3]
// let num2=[4,5,6]
// let num3=[7,8,9]
// console.log(num1.concat(num2,num3))

//sort method
// let num=[11,45,32545,445,45435,897,452,68,76]

// this sort according to alphabetically
// num.sort()
// console.log(num)

// this will do actual sorting ascending or descending
// let compare =(a,b)=>{
//   return a-b
// }
// num.sort(compare)
// console.log(num)

// reverse method
// let num=[11,2,3,4,5]
// console.log(num.reverse())

// splice method
let num=[11,2,3,4,5]
// let deleted_array=num.splice(1,2,12,1,0)   //deleted array will give deleted elements   ...here 1 is starting index of deleting array and 2 is number of deleting elements and 12,1,0 are elements that are to be added
// console.log(num,deleted_array)

//slice method
// let newarray=num.slice(2)
let newarray=num.slice(2,4)
console.log(newarray)
