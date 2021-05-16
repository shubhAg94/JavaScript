// Method 1: Linear Search --> O(N*N)

// Method 2: Since each row is sorted, we can use Binary Search to count of 1s in each row.
// We find the index of first instance of 1 in each row. The count of 1s will be equal to 
// total number of columns minus the index of first 1. --> O(mLogn)

// Method 3:  Start with top left corner with index (1, n) and try to go left until you reach last 
//1 in that row (jth column), now if we traverse left to that row, we will find 0, so switch to the 
//row just below, with same column. Now your position will be (2, j) again in 2nd row if jth element 
//if 1 try to go left until you find last 1 otherwise in 2nd row if jth element is 0 go to next row. So Finally say if you are at any ith row and jth column which is index of last 1 from right in that row, increment i. So now if we have Aij = 0 again increment i otherwise keep decreasing j until you find last 1 in that particular row

// Find the row with maximum number of 1s --> https://www.geeksforgeeks.org/find-row-number-binary-matrix-maximum-number-1s/
//https://medium.com/enjoy-algorithm/find-the-row-with-the-maximum-number-of-1s-3193b568c78
//Time Complexity = O(m+n)
function Find_the_row_with_maximum_number_of_1s(matrix, m, n){
    let max_1_row_index = 0;
    let row = 0;
    let col = n-1;

    for(row = 0; row < m; row++){
        // Find  index 1st zero in a row(col will represent first of zero
        // if all values are 1 then col will have -1 means no value with zero in row)
        while(col >= 0 && matrix[row][col] === 1){
            max_1_row_index = row;
            col--;
        }
    }

    console.log("Max Row number = " + (max_1_row_index + 1));
    console.log("MaxCount = " + (n - 1 - col));
}

Find_the_row_with_maximum_number_of_1s([[0,0,0,1],[0,0,0,1],[0,0,0,0],[0,1,1,1]], 4, 4);

Find_the_row_with_maximum_number_of_1s([[0,1,1,1],[0,0,1,1],[1,1,1,1],[0,0,0,0]], 4, 4);

Find_the_row_with_maximum_number_of_1s([[0,1,1,1],[0,0,1,1],[0,0,1,1]], 3, 4);

Find_the_row_with_maximum_number_of_1s([[0,1,1],[0,0,1],[1,1,1],[0,0,0]], 4, 3);

/*
Algorithm Analysis:
There are two nested loops in the code and time complexity looks O(mn), but this is not the correct analysis. If we observe closely, we are traversing each row and column at least once i.e outer loop traverses each row and inner loop traverse each column. (Think!)
Time Complexity = O(m+n)
Space Complexity: O(1)
 */