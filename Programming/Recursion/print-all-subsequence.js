function printSubsequences(input, output){
    if(input.length === 0){
        console.log(output);
        return;
    }

    printSubsequences(input.substring(1), output);
    printSubsequences(input.substring(1), output+input[0]);
}


printSubsequences("ABC", '');