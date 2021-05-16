function binarySearchDesc(arr, item){
    let start = 0;
    let end = arr.length-1;
    
    while(start <= end){
        let mid = parseInt(start + (end - start) / 2);

        if(item === arr[mid]){
             return mid;
        }

        if(item < arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearchDesc([10,8,7,6,3,2], 10));
console.log(binarySearchDesc([20,17,15,14,13,12,10,9,8,4], 4));
console.log(binarySearchDesc([20,17,15,14,13,12,10,9,8,4], 17));