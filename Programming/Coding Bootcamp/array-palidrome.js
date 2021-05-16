function arrPalindrome1(arr){
    for (let i = 0, j = arr.length-1; i < j; i++, j--) {
        if(arr[i] !== arr[j]){
            return false;
        }
        return true;
    }
}

// console.log(arrPalindrome1([1,2,2,1]));
// console.log(arrPalindrome1([1,2,1,2,1]));
// console.log(arrPalindrome1([1,2,1,2,2]));
// console.log(arrPalindrome1([1,2,,1,2]));

// reverse and compare
function arrPalindrome2(arr){
    let arrClone = [...arr];
    arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !== arrClone[i])  
            return false;      
    }
    return true;
}
console.log(arrPalindrome2([1,2,2,1]));
console.log(arrPalindrome2([1,2,1,2,1]));
console.log(arrPalindrome2([1,2,1,2,2]));
console.log(arrPalindrome2([1,2,,1,2]));