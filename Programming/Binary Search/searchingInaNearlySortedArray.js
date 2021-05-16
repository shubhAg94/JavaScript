function searchingInaNearlySortedArray(arr, item) {

    if(arr.length === 1){
        return 0;
    }

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (arr[mid] === item) {
            return mid;
        } else if (mid > 0 && arr[mid - 1] === item) {
            return mid - 1;
        } else if (mid < arr.length && arr[mid + 1] === item) {
            return mid + 1;
        }

        if(item < arr[mid]){
            end = mid - 2;
        } else{
            start = mid + 2;
        }
    }

    return -1;
}


// console.log(searchingInaNearlySortedArray([5,10,30,20,40], 40));
// console.log(searchingInaNearlySortedArray([5,10,30,20,40], 5));
// console.log(searchingInaNearlySortedArray([5,10,30,20,40], 20));

console.log(searchingInaNearlySortedArray([10, 3, 40, 20, 50, 80, 70], 40));
console.log(searchingInaNearlySortedArray([10, 3, 40, 20, 50, 80, 70], 90));