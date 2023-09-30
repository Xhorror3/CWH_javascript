// problem 1
let str="har\""
console.log(str.length)
// problem 2
let str1="There is fox living in woods."
let word="foxx"
console.log(`The word "${word}" ${str1.includes(word) ? 'is':'is not'} in the sentence.`)
console.log(str1.startsWith("There"))
console.log(str1.endsWith("woods."))
// problem 3
let name="Harry"
console.log(name.toLowerCase())
// problem 4
let sen="Please give me Rs 1000"
let amount =Number.parseInt(sen.slice("Please give me Rs ".length))
console.log(amount)
// problem
let name2="Harsh"
name2[2]="h"
console.log(name2)    //here string will not change as string is immutable
