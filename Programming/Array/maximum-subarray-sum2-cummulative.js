//from coding blocks --> Cummulative sum method

function MaximumSubarraySum2_Cummulative(a) {
    const cumSum = [a[0]];

    for (let i = 1; i < a.length; i++) {
        cumSum[i] = cumSum[i - 1] + a[i];
    }

    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;
    let left = -1;
    let right = -1;

    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {

            if (i === 0)
                currentSum = cumSum[j];
            else
                currentSum = cumSum[j] - cumSum[i - 1];

            if (currentSum > maxSum) {
                maxSum = currentSum;
                left = i;
                right = j;
            }
        }
    }
    console.log(`Sum: ${maxSum}. Starting index: ${left}, End index: ${right}`);
}

MaximumSubarraySum2_Cummulative([1, 2, 3, 4, 5]);
MaximumSubarraySum2_Cummulative([1, -2, 3, 4, -5]);
MaximumSubarraySum2_Cummulative([-1, -2, -3, -4, -5]);
MaximumSubarraySum2_Cummulative([-4, 1, 3, -2, 6, 2, -1, -4, -7]);


//Not good solution as above. Here in second loop j starts again from zero
//but in above solution loop j starts from i, so saving lot of iteration 
//that is not required.
function maxmimumSubarraySum(a) {
    let msum = Number.MIN_SAFE_INTEGER;

    //Generating all sub arrays
    for (let i = 0; i < a.length; i++) {
        let sum = 0;
        for (let j = 0; j < a.length; j++) {

            sum += a[i + j];

            if (sum > msum) {
                msum = sum;
            }
        }
    }
    console.log(`Sum: ${msum}`);
}

// maxmimumSubarraySum([1,2,3,4,5]);
// maxmimumSubarraySum([1,-2,3,4,-5]);
// maxmimumSubarraySum([-1,-2,-3,-4,-5]);
// maxmimumSubarraySum([-4,1,3,-2,6,2,-1,-4,-7]);