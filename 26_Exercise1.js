const prompt=require('prompt-sync')()
let number = Math.floor((Math.random() * 100) + 1);
let chance=0
let guess

console.log("This is a guessing game...if you entered correct number..you will be the winner!")
guess=prompt("Guess the number:")
++chance

do{
  guess=Number.parseInt(guess)
  if(guess>number){
    console.log("Your guess is greater than number.")
    guess=prompt("Enter again:")
    guess=Number.parseInt(guess)
    ++chance
    continue
  }
  else if(guess<number){
    console.log("Your guess is smaller than number.")
    guess=prompt("Enter again:")
    guess=Number.parseInt(guess)
    ++chance
    continue
  }
}while(guess!=number)
let score=100-chance
console.log("Congratulation...you are the winner your final score is",score)
