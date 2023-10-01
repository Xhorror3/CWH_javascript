let marks=[1,2,3,4,5]
let b=marks.toString()
console.log(b,typeof b)
let c=marks.join(" and ")
console.log(c,typeof c)
// pop
let p=marks.pop()
console.log(marks,p)      //p return the popped element
// push
let q=marks.push(20)
console.log(marks,q)      //q return the length of new array
// shift
let r=marks.shift()
console.log(marks,r)      //r return the first removed element
// unshift
let s=marks.unshift(10)
console.log(marks,s)      //s return the lenght of new array after adding new element
