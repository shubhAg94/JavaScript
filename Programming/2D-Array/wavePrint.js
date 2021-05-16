function wavePrint(matrix, m ,n){
    for(let col = 0; col < n; col++){
        if(col%2 === 0){
            //Even Col - Top Down
            for(let row = 0; row < m; row++){
                console.log(matrix[row][col]);
            }
        }
        else{
            //Odd Col - Bottom Up
            for(let row = m-1; row  >= 0; row--){
                console.log(matrix[row][col]);
            }
        }
    }
}

wavePrint([[1,2,3],[4,5,6],[7,8,9]], 3, 3);

