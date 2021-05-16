function selectionSort(a) {
    for (let i = 0; i < a.length; i++) {
        let min_index = i;
        for (let j = i+1; j < a.length; j++) {
            if(a[j] < a[min_index]){
                min_index = j;
            }
        }
        let temp = a[i];
        a[i] = a[min_index];
        a[min_index] = temp;
    }
    return a;
}

console.log(selectionSort([10,8,40,80,30,5]));