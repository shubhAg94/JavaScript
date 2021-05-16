function spiralPrint(matrix, m, n){
    let startRow = 0;
    let startCol = 0;
    let endRow = m-1;
    let endCol = n-1;

    //Print it till this while conditions
    while(startRow <= endRow && startCol <= endCol){
        //Start Row
        for(let i = startRow; i <= endCol; i++){
            console.log(matrix[startRow][i]);
        }
        startRow++;

        //End Col
        for(let i = startRow; i <= endRow; i++){
            console.log(matrix[i][endCol]);
        }
        endCol--;

        //End or Bottom Row
        if(startRow <= endRow){// if(endRow > startRow){
            for(let i = endCol; i >= startCol; i--){
                console.log(matrix[endRow][i]);
            }
            endRow--;
        }
        
        //Start Col
        if(startCol <= endCol){// if(endCol > startCol){
            for(let i = endRow; i >= startRow; i--){
                console.log(matrix[i][startCol]);
            }
            startCol++;
        }
        
    }
}

//spiralPrint([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], 4, 4);

//spiralPrint([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]], 3, 5);

spiralPrint([[1,2,3], [4,5,6], [7,8,9], [10,11,12], [13,14,15]], 5, 3);