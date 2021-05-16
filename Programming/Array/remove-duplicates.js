//https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
//Solution - 1
function removeDuplicates_Set(a){
    // const set = new Set(a);
    // return set;
    
    //======OR=======
    //return [...new Set(a)]; //Converts a set into array

    //======OR=======
    return Array.from(new Set(a)); //Converts a set into array
}
//console.log(removeDuplicates_Set([1,2,4,1,2,4,5,6,3,8,8,3,7]));

//Solution - 2 (Best -> O(n) R(n))
function removeDuplicates_NewArray(a){
    let unique = [];
    for (const item of a) {
        if(!unique.includes(item)){
            unique.push(item);
        }
        //or
        // if(unique.indexOf(item)==-1){
        //     unique.push(item);
        // }
    }
    return unique;
}
//console.log(removeDuplicates_NewArray([1,2,4,1,2,4,5,6,3,8,8,3,7]));

//Solution - 3 
function removeDuplicates_Filter(a){
    return a.filter((value,index) => a.indexOf(value) === index);
}
//console.log(removeDuplicates_Filter([1,2,4,1,2,4,5,6,3,8,8,3,7]));

//Solution - 4 Using Set and Spread operator
var arr = [1,2,3,1,2,3];
var uniqueArr = [...new Set(arr)];
//console.log(uniqueArr);

//Solution - 5 Using the splice Method
arr.forEach((el, ind, array) => {
   if(array.indexOf(el) !== array.lastIndexOf(el)){
      array.splice(ind, 1);
   }
});
console.log(arr);

//Solution - 6 Using the reduce Method
var unique2 = arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
}, []);
//console.log(unique2);