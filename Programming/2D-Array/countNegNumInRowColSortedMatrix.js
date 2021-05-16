//Method 1 : Linear Search --> O(N*N)
//Method 2 : Below implementation
/*
Here’s a more efficient solution:

We start from the top right corner and find the position of the last negative number in the first row.
Using this information, we find the position of the last negative number in the second row.
We keep repeating this process until we either run out of negative numbers or we get to the last row.
 */


function countNegNumInRowColSortedMatrix(matrix, m, n){
    let row = 0;
    let col = n-1;

    let count = 0;
    while(row < m && col >= 0){
        if(matrix[row][col] < 0){
            count += col+1;
            row += 1;
        }
        else{
            col -= 1;
        }
    }

    return count;
}

console.log(countNegNumInRowColSortedMatrix([[-3,-2,-1,1],[-2,2,3,4],[4,5,7,8]], 3, 4));