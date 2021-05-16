//First Solution
function palidrome1(str){
   const reversed = str.split('').reverse().join('');
   return str === reversed;
}

//console.log(palidrome1('abba'));

//Second Solution
function palidrome2(str){
   return str.split('').every((char, i) => {
    return char === str[str.length-i-1]
   });
   
}
//console.log(palidrome2('abba'));

//Third Solution
function palidrome3(str){
   for (let i = 0; i < a.length; i++) {
      if(str[i] !== str[str.length-1-i]){
         return false;
      }
      return true;
   }
}
console.log(palidrome2('abba'));
console.log(palidrome2('abbaabab'));