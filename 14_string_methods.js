let name="Harry bhai"
// method 1
console.log(name.length)
// method 2
console.log(name.toUpperCase())
// method 3
console.log(name.toLowerCase())
// method 4
console.log(name.slice(2,4))
// method 5
console.log(name.slice(2))
// method 6
console.log(name.replace("bhai","bhau"))
// method 7
let name2="Boss"
console.log(name.concat(" is ",name2))
let n="big"
let a="boss"
console.log(n.concat(a))
// method 8
let name3="  Hey, How are u  "
console.log(name3.trim())      //it only trims white space of start and end not in middle

let name4="BigBoss"
let name5=""
for(let i=0;i<name4.length;i++){
  name5+=name4[i]
}
console.log(name5)
