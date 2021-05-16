keypad = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
function keypadStrings(inputStr, outputArr, i, j){
    if(inputStr.length === i){
        console.log(outputArr);
        return;
    }

    let digit = +inputStr[i];

    if(digit == 1 || digit == 0){
        keypadStrings(inputStr, outputArr, i+1, j);
    }

    for(let k = 0; k < keypad[digit].length; k++){
        outputArr[j] = keypad[digit][k];

        //Fill the remaining part
        keypadStrings(inputStr, outputArr, i+1, j+1);
    }

    return;
}

keypadStrings('23', [], 0, 0);
console.log('==============================');
keypadStrings('1123', [], 0, 0);
console.log('==============================');
keypadStrings('666', [], 0, 0);