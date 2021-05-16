//An array element is a peak if it is NOT smaller(equal or greater) than its neighbours.
function printAllPeakElements(a) {
    if (a[0] >= a[1])
        console.log(a[0]);
    if (a[a.length - 1] >= a[a.length - 2])
        console.log(a[a.length - 1]);

    for (let i = 1; i < a.length - 1; i++)
    {
        if (a[i] >= a[i - 1] && a[i] >= a[i + 1])
            console.log(a[i]);
    }
}
//printAllPeakElements([5, 10, 20, 15]);
printAllPeakElements([10, 20, 15, 2, 23, 90, 67]);
//printAllPeakElements([5, 10, 20, 15]);