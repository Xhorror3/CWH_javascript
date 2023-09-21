let a=prompt("What's your age?");
a=Number.parseInt(a);
// if(a<0){
//   alert("It's a invalid age!");
// }
// else if(a<18)
// {
//   alert("You cannot drive!");
// }
// else{
//   alert("You can drive!");
// }

// switch case:

// switch(a){
//   case 0:
//     console.log("Invalid age!")
//     break;
//   case 1:
//     console.log("You cannot drive!")
//     break;
//   case 18:
//     console.log("You can drive!")
//     break;
// }

// ternary operator
console.log(a<18?"you cannot drive":"You can drive")
