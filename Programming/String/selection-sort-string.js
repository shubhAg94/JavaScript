function selectionSort(str) {
    let sorted = '';
    for (let i = 0; i < str.length; i++) {
        let min_index = i;
        for (let j = i+1; j < str.length; j++) {
            if(str.charCodeAt(j) < str.charCodeAt(min_index)){
                min_index = j;
            }
        }
        sorted += str[min_index];
    }
    return sorted;
}

console.log(selectionSort('hello'));