function binarySearch(arr, lb, ub,item){
    //Base Case - 1
    if(lb > ub){
        return -1;
    }
    
    let mid = Math.floor((lb + ub)/2);
    ////Base Case - 2
    if(arr[mid]=== item){
        return mid;
    } else if(item < arr[mid]){
        return binarySearch(arr, lb, mid-1, item);
    } else{
        return binarySearch(arr, mid+1, ub, item);
    }
}

console.log(binarySearch([1,2,3,4,5], 0, 4, 2));
console.log(binarySearch([2,6,12,21,36,47,63,81,97,], 0, 8, 63));
console.log(binarySearch([2,6,12,21,36,47,63,81,97,], 0, 8, 65));