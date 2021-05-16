function findFloorOfAnElementInASortedArray(arr, item) {
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (arr[mid] === item) {
            return mid;
        } else if (arr[mid] < item) {
            result = arr[mid];
            start = mid + 1;
        } else if(arr[mid] > item){
            end = mid - 1;
        }
    }

    return result;
}

console.log(findFloorOfAnElementInASortedArray([1,2,3,4,8,10,10,12,19], 5));
