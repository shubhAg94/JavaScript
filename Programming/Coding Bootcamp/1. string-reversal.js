const str = "shubham";
function reverseString1(){
  for(let i=str.length-1;i>=0; i--){
    console.log(str[i]);
  }
}
//reverseString1();

console.log("==========Second Solution===========")
function reverseString2(){
  // const arr = str.split('');
  // arr.reverse();
  // return arr.join('');
  return str.split('').reverse().join('');
}
console.log(reverseString2());

console.log("==========Third Solution===========")
function reverseString3(){
  let reversed = '';
  for (const char of str) {
    reversed = char + reversed;
  }
  return reversed;
}
console.log(reverseString3());

console.log("==========Fourth Solution===========")
function reverseString4(){
  return str.split('').reduce((acc, char) => char + acc, '');
}
console.log(reverseString4());

