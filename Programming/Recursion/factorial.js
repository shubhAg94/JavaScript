function factorial(n){
    //Step 1: Base case
    if(n === 0){
        return 1;
    }

    //Step 2: Induction Hypothesis ==> Assume f(k) = (k+1)/2 is truesss
    let smallOutput = factorial(n-1);
    
    //Step 3: Solve for n (Assuming that solution for (n-1) is correct)
    let output = n * smallOutput;
    return output; 
}

console.log(factorial(5));