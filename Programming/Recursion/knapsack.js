function knapsackProfit(N, C, weights, prices){
    //Base Case
    if(N===0 || C ===0){
        return 0;
    }

    let ans = 0;
    let include = Number.MIN_SAFE_INTEGER;
    //Including the item( Why n-1 --> because we are picking elements from last -> not mandatory)
    if(C >= weights[N-1]){
        include = prices[N-1] + knapsackProfit(N-1, C - weights[N-1], weights, prices);
    }

    //Excluding the item
    let exclude = knapsackProfit(N-1, C, weights, prices);

    return Math.max(include, exclude);
}

console.log(knapsackProfit(4,7, [1,2,3,5], [40,20,30,100]));