function generateBracket(outArr, n, index, openCnt, closeCnt){
    if(index == 2*n){
        console.log(outArr);
        return;
    }

    if(openCnt<n){
        outArr[index] = "(";
        generateBracket(outArr, n, index+1, openCnt+1, closeCnt);
    }
    if(closeCnt<openCnt){
        outArr[index] = ")";
        generateBracket(outArr, n, index+1, openCnt, closeCnt+1);
    }
    return;
}

generateBracket([], 2, 0, 0, 0);
generateBracket([], 3, 0, 0, 0);