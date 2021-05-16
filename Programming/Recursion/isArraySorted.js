function isArraySorted(arr, n){
    if(n === 0 || n === 1){
        return true;
    }

    //console.log(arr);
    //Breaking the array into 1(length) and (n-1)length 
    let smallAns = isArraySorted(arr.slice(1), n-1);
    if(arr[0] < arr[1] && smallAns){
        return true;
    } 

    return false;
}

console.log(isArraySorted([1,2,3,4,5], 5));