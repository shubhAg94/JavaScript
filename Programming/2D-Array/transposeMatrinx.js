function transposeSquareMatrix_InPlace(mat, n){
    //In place works for square matrix only
    for(let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) { 
            //This if condition make sure that we are swapping one triangle
            //(in square matrix we can have 2 traingle one left to diagonal & right to digonal) only
            if(i < j){
                // const tmp = mat[i][j]; 
                // mat[i][j] = mat[j][i]; 
                // mat[j][i] = tmp;
                //Swapping
                [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]]
            } 
        } 
    }

    // for(let i = 0; i < n; i++){
    //     for (let j = 0; j < i; j++) { 
    //             const tmp = mat[i][j]; 
    //             mat[i][j] = mat[j][i]; 
    //             mat[j][i] = tmp;
    //     } 
    // }
    return mat;
}

console.log(transposeSquareMatrix_InPlace([[1,2,3],[4,5,6],[7,8,9]], 3, 3));

function transposeRectangularMatrix(mat, m, n){
    const transpose = [];
    for(let i = 0; i < m; i++){
        const temp = [];
        for (let j = 0; j < n; j++) { 
            temp.push(mat[j] [i]);
        } 
        transpose.push(temp);
    }
    return transpose;
}

//console.log(transposeRectangularMatrix([[1,2,3],[4,5,6],[7,8,9],[10,11,12]], 3, 4));

