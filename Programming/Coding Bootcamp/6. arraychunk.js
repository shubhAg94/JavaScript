function chunkWithNaive(array, size){
  const chunked = [];
  let chunk = [];
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    counter++;
    if(counter === size || i === array.length-1){
      chunked.push(chunk);
      counter = 0;
      chunk = [];
    }
  }
  return chunked;
}
// console.log(chunkWithNaive([1,2,3,4], 2));
// console.log(chunkWithNaive([1,2,3,4,5], 2));
// console.log(chunkWithNaive([1,2,3,4,5,6,7,8], 3));
// console.log(chunkWithNaive([1,2,3,4,5], 4));
// console.log(chunkWithNaive([1,2,3,4,5], 10));


function chunk(array, size){
  const chunked = [];
  for (let el of array) {
    const last = chunked[chunked.length - 1];

    if(!last || last.length === size){
      chunked.push([el]);
    } else{
      last.push(el);
    }
  }
  return chunked;
}

// console.log(chunk([1,2,3,4], 2));
// console.log(chunk([1,2,3,4,5], 2));
// console.log(chunk([1,2,3,4,5,6,7,8], 3));
// console.log(chunk([1,2,3,4,5], 4));
// console.log(chunk([1,2,3,4,5], 10));

function chunkWithSliceMethod(array, size){
  const chunked = [];
  let index = 0;
  while(index < array.length){
    let subarr = array.slice(index, index+size);
    chunked.push(subarr);
    index += size;
  }
  return chunked;
}
console.log(chunkWithSliceMethod([1,2,3,4], 2));
console.log(chunkWithSliceMethod([1,2,3,4,5], 2));
console.log(chunkWithSliceMethod([1,2,3,4,5,6,7,8], 3));
console.log(chunkWithSliceMethod([1,2,3,4,5], 4));
console.log(chunkWithSliceMethod([1,2,3,4,5], 10));

