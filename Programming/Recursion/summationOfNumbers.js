function summation(n){
    if(n==1){
        return 1;
    }

    let smalloutput = summation(n-1);
    let output = n + smalloutput;
    return output;
}

console.log(summation(6));
console.log(summation(10));