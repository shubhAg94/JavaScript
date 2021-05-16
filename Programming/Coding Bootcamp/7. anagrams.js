function anagramsWithMap(stringA, stringB){

  //Here we are using non char symbols also and we are clening those
  //So, This condition is not effective here
  // if(stringA.length !== stringB.length){
  //   return false;
  // }

  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);
  console.log(aCharMap);
  console.log(bCharMap);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
    return false;
  }

  for (const key in aCharMap) {
    if (aCharMap[key] !== bCharMap[key]) {
      return false;
    } 
  }
  return true;
}

function buildCharMap(str){
  const map = {};
  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    map[char] = map[char] + 1 || 1;
  }
  return map;
}

//console.log(anagramsWithMap('Rail safety!', 'fairy tales'));

function anagramsWithSorting(stringA, stringB){
  return cleanAndSortString(stringA) === cleanAndSortString(stringB);
}

function cleanAndSortString(str){
  return str.replace(/[\w]/g, '').toLowerCase().split('').sort().join('');
}


/*
Method 3 (Count characters) 
This method assumes that the set of possible characters in both strings is small. In the following 
implementation, it is assumed that the characters are stored using 8 bit and there can be 256 
possible characters. 

Create count arrays of size 256. Initialize all values in count arrays as 0. Iterate through every 
character of both strings and We can increment the value in count array for characters in str1 and 
decrement for characters in str2. Finally,  if all count values are 0, 
then the two strings are anagram of each other. 
 */
function anagramsWithCountArray(stringA, stringB){
  if(stringA.length !== stringB.length){
    return false;
  }
  
  let countArr = new Array(256).fill(0);

  for(let i = 0; i < stringA.length; i++){
    countArr[stringA.charCodeAt(i)]++;
    countArr[stringB.charCodeAt(i)]--;
  }

  console.log(countArr);

  for(let j = 0; j < countArr.length; j++){
    if(countArr[j]){
      return false;
    }
  }
  return true;
}

//console.log(anagramsWithCountArray('geeksforgeeks','forgeeksgeeks'));
console.log(anagramsWithCountArray('test','ttew'));
//console.log(anagramsWithCountArray('test','tes'));