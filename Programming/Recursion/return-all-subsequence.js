function returnAllSubstings(input, output){
    if(input.length === 0){
        output[0] = '';
        return 1;
    }

    let smallAnsArraySize = returnAllSubstings(input.substr(1), output);
    for(let i = 0; i < smallAnsArraySize; i++){
        output[i + smallAnsArraySize] = input[0]+output[i];
    }

    return 2 * smallAnsArraySize;
}

resultArr = [];
console.log(returnAllSubstings("ABC", resultArr));
console.log(resultArr);