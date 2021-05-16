function maxmimumSubarraySum(a){
    let msum = Number.MIN_SAFE_INTEGER;
    let left = -1;
    let right = -1;

    //Generating all sub arrays
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            //Adding i to j
            //Element of subarray(i,j)
            let csum = 0;
            for (let k = i; k<=j ; k++) {
                csum += a[k];
            }
            //Update maximum sum
            if(csum > msum){
                msum = csum;
                left = i;
                right = j;
            }
        }
    }
    console.log(`Sum: ${msum}. Starting index: ${left}, End index: ${right}`);
}

maxmimumSubarraySum([1,2,3,4,5]);
maxmimumSubarraySum([1,-2,3,4,-5]);
maxmimumSubarraySum([-1,-2,-3,-4,-5]);
maxmimumSubarraySum([-4,1,3,-2,6,2,-1,-4,-7]);