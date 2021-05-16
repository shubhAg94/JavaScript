function binarySearchAsc(arr, item){
    let start = 0;
    let end = arr.length-1;
    
    while(start <= end){
        let mid = parseInt(start + (end - start) / 2);

        if(item === arr[mid]){
             return mid;
        }

        if(item > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearchAsc([1,2,3,5,8,10], 10));
console.log(binarySearchAsc([1,2,3,5,8,10], 12));