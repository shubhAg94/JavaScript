function nextAlphabeticalElement(arr, item){
    let start = 0;
    let end = arr.length - 1;
    let result = -1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

        if (arr[mid] === item) {
            start = mid + 1;
        } else if (arr[mid] < item) {
            start = mid + 1;
        } else if(arr[mid] > item){
            result = arr[mid];
            end = mid - 1;
        }
    }

    return result;
}

console.log(nextAlphabeticalElement(['a','c','f','h'], 'f'));
console.log(nextAlphabeticalElement(['A', 'K', 'S'], 'L'));
console.log(nextAlphabeticalElement(['D', 'J', 'K'], 'B'));
