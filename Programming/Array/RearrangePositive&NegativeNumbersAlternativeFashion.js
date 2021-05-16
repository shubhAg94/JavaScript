//Not maintaning order
function rearrangePositiveAndNegativeNumbersAlternativeFashion(a){
    let count = 0;

    ////Segregating negative numbers at left and positives numbers at right side of an array.
    for(let i = 0; i < a.length; i++){
        if(a[i] < 0){
            [a[count], a[i]] = [a[i], a[count]]
            count++;
        }
    }

    // Now all positive numbers are at end and negative numbers at the beginning of array. 
    // Initialize indexes for starting point of positive and negative numbers to be swapped
    let pos = count;
    let neg = 0;

    // Increment the negative index by 2 and positive index by 1, i.e., swap every  
    // alternate negative number with next positive number
    while(pos < a.length && a[neg] < 0){
        [a[neg], a[pos]] = [a[pos], a[neg]]
        pos++;
        neg+=2;
    }
    return a;
}

console.log(rearrangePositiveAndNegativeNumbersAlternativeFashion([1,2,3,-4,-1,4]));

//Not maintaning order with O(n) extra space

//Not maintaning order with only O(1) extra space --> NOw it becomes HARD
//https://www.geeksforgeeks.org/rearrange-array-alternating-positive-negative-items-o1-extra-space/