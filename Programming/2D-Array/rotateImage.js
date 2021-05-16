function rotateImage_90DegreeAntiClockwise(mat, n){
    //1. Reverse each row
    for(let row = 0; row < n; row++){
        let start_col = 0;
        let end_col = n-1;
        while(start_col < end_col){
            [mat[row][start_col], mat[row][end_col]] = [mat[row][end_col], mat[row][start_col]];
            start_col++;
            end_col--;
        }
    }

    //2. Transpose the matrix
    for(let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) { 
            if(i < j){
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
            } 
        } 
    }

    return mat;
}

//console.log(rotateImage_90DegreeAntiClockwise([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]], 4));

function rotateImage_90DegreeClockwise(mat, n){
    //1. Reverse each column
    for(let row = 0; row < n; row++){
        let start_col = 0;
        let end_col = n-1;
        while(start_col < end_col){
            [mat[start_col][row], mat[end_col][row]] = [mat[end_col][row], mat[start_col][row]];
            start_col++;
            end_col--;
        }
    }

    //2. Transpose the matrix
    for(let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) { 
            if(i < j){
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
            } 
        } 
    }

    return mat;
}

console.log(rotateImage_90DegreeClockwise([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]], 4));