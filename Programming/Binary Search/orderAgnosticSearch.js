function orderAgnosticSearch(arr, item){
    if(arr.length === 1){
        return 0;
    }

    if(a[i] < a[i+1]){
        return binarySearchAsc(arr, item);
    } else {
        return binarySearchDesc(arr, item);
    }
}

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


