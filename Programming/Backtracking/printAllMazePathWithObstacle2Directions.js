function printAllMazePathWithObstacle2Directions(maze, sr, sc, dr, dc, psf){
    //Positive Base Case
    if(sr === dr && sc === dc){
        console.log(psf);
        return;
    }
    
    //Negatie Base Case - 1
    if(sr > dr || sc > dc){
        return;
    }

    //Negatie Base Case - 2(When cell is locked)
    if(maze[sr][sc] === 0){
        return;
    }

    printAllMazePathWithObstacle2Directions(maze, sr, sc+1, dr, dc, psf + "H"); // Horizontal Move
    printAllMazePathWithObstacle2Directions(maze, sr+1, sc, dr, dc, psf + "V"); // Vertical Move
}

// let mazeInput = [
//     [1,0,1,1],
//     [1,1,1,1],
//     [1,0,1,1],
//     [1,1,0,1]
// ]; 

let mazeInput = [
    [1,1,1,1],
    [1,1,0,1],
    [1,1,1,0],
    [1,0,1,1]
]; 

printAllMazePathWithObstacle2Directions(mazeInput, 0, 0, 3, 3, '');