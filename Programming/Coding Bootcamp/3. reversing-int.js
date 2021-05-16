console.log("==========First Solution===========")
function reverseInt1(num){
  //return parseInt(myNumber.toString());
  //parseInt() -> we can use to convert a string to back into number 
  //but this will not include initial zeros
  return parseInt(num.toString().split('').reverse().join(''));
}
//console.log(reverseInt1(200));
//console.log(reverseInt1(-15));

console.log("==========Second Solution with Sign===========")
function reverseInt2(n){
  const rev = n.toString().split('').reverse().join('');
  console.log(rev);
  if(n < 0){
    return parseInt(rev) * -1;
  }
  return parseInt(rev);
   
}
//console.log(reverseInt1(200));
console.log(reverseInt2(-15));