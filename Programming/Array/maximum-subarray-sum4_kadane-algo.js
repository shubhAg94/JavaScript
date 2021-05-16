//Works even if all the elements are negative
function maxmimumSubarraySum3KadaneAlgo(a){
    //Kadane's algo for maximum subarray sum
    let current_sum = 0;
    let max_sum = Number.MIN_SAFE_INTEGER;

    //Kadane's algo for maximum subarray sum
    for (let i = 0; i < a.length; i++) {
        current_sum = current_sum + a[i];

        if(current_sum > max_sum){
            max_sum = current_sum;
        }

        if (current_sum < 0) {
            current_sum = 0;
        }
    }
    return max_sum;
}

// console.log(maxmimumSubarraySum3KadaneAlgo([1, 2, 3, 4, 5]));
// console.log(maxmimumSubarraySum3KadaneAlgo([1, -2, 3, 4, -5]));
// console.log(maxmimumSubarraySum3KadaneAlgo([-1, -2, -3, -4, -5]));

// console.log(maxmimumSubarraySum3KadaneAlgo([-4,1,3,-2,6,2,-1,-4,-7]));
// console.log(maxmimumSubarraySum3KadaneAlgo([-4,1,3,-2,6,2,-1,-4,-7,11]));
// console.log(maxmimumSubarraySum3KadaneAlgo([-2,-3,4,-1,-2,1,5,-3]));

function maxmimumSubarraySum4_WithIndexes_KadaneAlgo(a){
    //Kadane's algo for maximum subarray sum
    let current_sum = 0;
    let max_sum = Number.MIN_SAFE_INTEGER;
    let start =0;
    let end = 0; 
    let newStart=0; 

    //Kadane's algo for maximum subarray sum
    for (let i = 0; i < a.length; i++) {
        current_sum = current_sum + a[i];

        if(current_sum > max_sum){
            max_sum = current_sum;

            start = newStart; 
            end = i; 
        }

        if (current_sum < 0) {
            current_sum = 0;

            newStart = i + 1; 
        }
    }
    console.log(`Maximum Subarray Sum: ${max_sum}`);
    console.log(`Indices: ${start} - ${end}`);
}

maxmimumSubarraySum4_WithIndexes_KadaneAlgo([1, 2, 3, 4, 5]);
maxmimumSubarraySum4_WithIndexes_KadaneAlgo([1, -2, 3, 4, -5]);
maxmimumSubarraySum4_WithIndexes_KadaneAlgo([-1, -2, -3, -4, -5]);
maxmimumSubarraySum4_WithIndexes_KadaneAlgo([-4,1,3,-2,6,2,-1,-4,-7]);
maxmimumSubarraySum4_WithIndexes_KadaneAlgo([-4,1,3,-2,6,2,-1,-4,-7,11]);
maxmimumSubarraySum4_WithIndexes_KadaneAlgo([-2,-3,4,-1,-2,1,5,-3]);
