let marks=[10,30,23.4,"not availabe",false]
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])    // this will give undefined value
console.log(marks.length)
console.log(typeof marks)
// changing the value of element
marks[0]=90
// adding new element in array
marks[5]=98
console.log(marks)

// assignment
for(let i=0;i<marks.length;i++){
  console.log(marks[i])
}
