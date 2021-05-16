function ladder(n, k){
    if(n === 0){
        return 1;
    }

    if(n < 0){
        return 0;
    }

    let ans = 0;
    //ans = ladder(n-1)+ladder(n-2)+ladder(n-3); 
    for (let i = 1; i <= k; i++) {
        ans += ladder(n-i, k);
    }
    return ans;
}

console.log(ladder(4, 3));