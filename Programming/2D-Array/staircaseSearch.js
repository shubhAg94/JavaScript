// Time Complexity O(n+m)
function staircaseSearch(matrix, n, item){
    // set indexes for top right element
    let row = 0;
    let col = n-1;
    
    while(row < n && col >= 0){
        if(matrix[row][col] === item){
            console.log(`${item} found at ${row},${col}`);
            return;
        }

        if(matrix[row][col] > item)
            col--;
        else
            row++;
    }

    console.log(`${item} not found in the matrix`);
}

staircaseSearch([[1,4,8,10],[2,5,9,15],[6,16,18,20],[11,17,19,23]], 4, 17);