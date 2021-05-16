function fib(n){
    //Base Case
    if(n === 0){
        return 0;
    }

    if(n === 1){
        return 1;
    }

    //I.H. (Using extended PMI)
    let samllOutput1 = fib(n-1);
    let samllOutput2 = fib(n-2);

    //I.S.
    let output = samllOutput1+samllOutput2;
    return output;
}

console.log(fib(6));
console.log(fib(3));