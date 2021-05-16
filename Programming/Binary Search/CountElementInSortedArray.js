//Count = lastOccurrence - firstOccurrence + 1;
function countElementInSortedArray(arr, item){
    let firstOccurence = firstOccurenceOfElement(arr, item);
    let lastOccurrence = lastOccurenceOfElement(arr, item);

    return lastOccurrence - firstOccurence + 1;
}

function firstOccurenceOfElement(arr, item){
    let start = 0;
    let end = arr.length-1;
    let res =  -1;

    while(start <= end){
        let mid = parseInt(start + (end - start) / 2);

        if(item === arr[mid]){
             res = mid;
             end = mid - 1;
        }
        else if(item > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return res;
}

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
console.log(countElementInSortedArray([2,4,10,10,10,18,20], 10));
console.log(countElementInSortedArray([2,4,10,10,10,18,20], 20));
console.log(countElementInSortedArray([2,4,10,10,10,18,20], 2));
console.log(countElementInSortedArray([2,4,10,10,10,10,10,10,18,20], 10));