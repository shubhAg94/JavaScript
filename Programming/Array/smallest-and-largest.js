function sammlesLargest(a) {
    let smallest = a[0];
    let largest = a[0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > largest) {
            largest = a[i];
        }
        if (a[i] < smallest) {
            smallest = a[i];
        }
    }

    console.log(`Smallest: ${smallest} \nLargest: ${largest}`);
}

sammlesLargest([10,20,15,12,8]);

