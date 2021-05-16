function findAnElementInARotatedSortedArray(arr, item){
    let minIndex = findIndexOfMinimumInASortedRotatedArray(arr);
    let itemIndexInLeftHalf = binarySearchAsc(arr, 0, minIndex - 1, item);
    if(itemIndexInLeftHalf > -1){
        return itemIndexInLeftHalf;
    }
    let itemIndexInSecondHalf = binarySearchAsc(arr, minIndex, arr.length-1, item);
    return itemIndexInSecondHalf;
}

function findIndexOfMinimumInASortedRotatedArray(arr) {
    // If the list has just one element then return that element.
    if (arr.length == 1) {
        return arr[0];
    }

    let start = 0;
    let end = arr.length - 1;

    // if the last element is greater than the first element then there is no rotation.
    // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
    // Hence the smallest element is first element. A[0]
    if (arr[start] > arr[0]) {
        return arr[0];
      }

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

        //If element is min then return(min element will be less then left and right elements
        //Below condition fails if min element is at last position for that we will find
        // next = (mid + 1) % arr.length
        // if(arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]){
        //     return mid;
        // }
        nextIndex = (mid + 1) % arr.length;//For last element nextIndex will be arr[0]
        if(arr[mid] < arr[nextIndex] && arr[mid] < arr[mid - 1]){
            return mid;
        }

        //We know that we will get minimum element in the unsorted array..so we need to find out
        //the unsorted array and continue BS in the unsorted array.
        //How to find which part is unsorted array:
        // 1. If arr[mid] > a[0] means right part is unsorted
        // 2. If arr[mid] < a[n-1] means left part is unsorted 
        if(arr[mid] > arr[0]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

function binarySearchAsc(arr, start, end, item){
    let low = start;
    let high = end;
    
    while(low <= high){
        let mid = parseInt(low + (high - low) / 2);

        if(item === arr[mid]){
             return mid;
        }

        if(item > arr[mid]){
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(findAnElementInARotatedSortedArray([11,12,15,18,2,5,6,8], 15));
console.log(findAnElementInARotatedSortedArray([11,12,15,18,2,5,6,8], 8));
console.log(findAnElementInARotatedSortedArray([11,12,15,18,2,5,6,8], 11));