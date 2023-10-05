console.log("log")
console.info("hey")
console.error("damn")
console.warn("Haat")
console.assert("Fish"!=false)
console.assert("Fish"==false)

console.time("forloop")
for(let i=0;i<500;i++){
  console.log(4)
}

console.timeEnd("forloop")

console.time("whileloop")
let i=0
while(i<500){
  console.log(4)
  i++
}

console.timeEnd("whileloop")