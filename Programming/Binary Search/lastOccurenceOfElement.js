function lastOccurenceOfElement(arr, item){
    let start = 0;
    let end = arr.length-1;
    let res =  -1;

    while(start <= end){
        let mid = parseInt(start + (end - start) / 2);

        if(item === arr[mid]){
             res = mid;
             start = mid + 1;
        }
        else if(item > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return res;
}

console.log(lastOccurenceOfElement([2,4,10,10,10,18,20], 10));