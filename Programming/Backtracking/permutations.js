function permute(input, i){
    //Base Case
    if(i === (input.length-1)){
        console.log(input);
        return;
    }

    // if(input[i] === undefined){
    //     console.log(input);
    //     return;
    // }

    for (let j = i; j < input.length; j++) {
        let swappedInput = swap(input, i, j);
        permute(swappedInput, i+1);
    }
}

function swap(str, i, j) 
{ 
  let charArray = str.split('');
  temp = charArray[i] ; 
  charArray[i] = charArray[j]; 
  charArray[j] = temp; 
  let swappedStr = charArray.join('');
  return swappedStr; 
}

permute('abc',0)