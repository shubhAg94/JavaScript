//1: flat method --> Best Method(For All levels)
function flattenArray() {
    //let a = [1, 2, [3, 4]];
    //console.log(a.flat());//[ 1, 2, 3, 4 ]

    const arr1 = [0, 1, 2, [[[3, 4]]]];
    // console.log(arr1.flat()); //[ 0, 1, 2, [ [ 3, 4 ] ] ]
    // console.log(arr1.flat(1));//[ 0, 1, 2, [ [ 3, 4 ] ] ]
    // console.log(arr1.flat(2));//[ 0, 1, 2, [ 3, 4 ] ]    
    // console.log(arr1.flat(3));//[ 0, 1, 2, 3, 4 ]

    const arr2 = [1, 2, [3, 4, [5, 6]]];
    // console.log(arr2.flat());//[ 1, 2, 3, 4, [ 5, 6 ] ]
    // console.log(arr2.flat(2));//[ 1, 2, 3, 4, 5, 6 ]

    var arr3 = [2, [3, 4, [5], [6, [7, [8]]], 5]];
    //console.log(arr3.flat(4));

}
flattenArray();

//2: loop with splice(delete array & add with spread) --> Second Best(For All levels)
function flatten(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (Array.isArray(item)) {
            arr.splice(i, 1, ...item);
            i--;
        }
    }
    return arr;
}
// console.log(flatten([2, [3, 4, [5], [6, [7, [8]]], 5]]));
// console.log(flatten([1, [2, [3, [4, [5, 6]]]]]));

function flatArrayIterative1(input) {
    var out = input;
    /*
    Clever for its brevity, but it's slower than other solutions, because you call some at every 
    iteration, and repeatedly reallocate the array using concat, with increasing complexity, 
    potentially concatenating the same scalars over and over.
     */
    while (out.some(Array.isArray))
        out = [].concat.apply([], out);

    console.log(out);
}
//flatArrayIterative1([1, 2, [3, [[4]], 5, [6]], 7, 8]);

function flatArrayIterative2(arr) {
    var i = 0;

    if (!Array.isArray(arr)) {
      /* return non-array inputs immediately to avoid errors */
      return arr;
    }
  
    while (i < arr.length) { 
      if (Array.isArray(arr[i])) {
        arr.splice(i, 1, ...arr[i]);
      } else {
        i++;
      }
    }
    return arr;
}
//console.log(flatArrayIterative2([1, 2, [3, [[4]], 5, [6]], 7, 8]));

//3: concat() and apply() --> Only for one level
let arr = [[1, 2], [3, 4], [5, 6, 7, 8, 9], [10, 11, 12]];
//console.log([].concat.apply([], arr));

//4: spread operator in ES6 --> Only for one level
//console.log([].concat(...arr));

//5: Reduce:
var flatArray = arr.reduce((acc, el) => acc.concat(el), []);
var flatArray1 = arr.reduce((acc, el) => acc.push(el), []);
console.log("Flat array: ", flatArray);





