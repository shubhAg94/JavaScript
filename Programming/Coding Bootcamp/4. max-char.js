//most frequent character in a string
function maxChar(str){
  const map = {};
  for(let char of str){
    map[char] = map[char] + 1 || 1;
  }

  let max = 0;
  let maxChar = '';

  for(let char in map){
    if(map[char] > max){
      max = map[char];
      maxChar = char;
    }
  }

  return maxChar;
}

console.log(maxChar("abcbabccccnchhc"));



