function swap(str, i, j) 
{ 
  let charArray = str.split('');
  temp = charArray[i] ; 
  charArray[i] = charArray[j]; 
  charArray[j] = temp; 
  let swappedStr = charArray.join('');
  return swappedStr; 
}

console.log(swap('abcd', 1, 2));