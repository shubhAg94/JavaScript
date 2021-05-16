function isInvalid(maze, sr, sc, dr, dc, psf, visited){
    //Negatie Base Case - 1
    if(sr > dr || sr < 0 || sc > dc || sc < 0){
        return true;
    }

    //Negatie Base Case - 2(When cell is locked)
    if(maze[sr][sc] === 0){
        return true;
    }

    //Negatie Base Case - 3 (stopping infine recursion)
    if(visited[sr][sc] === true){
        return true;
    }

    return false;
}

function printMazePathWithObstacles(maze, sr, sc, dr, dc, psf, visited){
    //Positive Base Case
    if(sr === dr && sc === dc){
        console.log(psf);
        return;
    }
    
    //Negative Base Case
    if(isInvalid(maze, sr, sc, dr, dc, psf, visited)){
        return;
    }

    visited[sr][sc] = true;
    printMazePathWithObstacles(maze, sr+1, sc, dr, dc, psf + "D", visited); //D
    printMazePathWithObstacles(maze, sr, sc-1, dr, dc, psf + "L", visited); //L
    printMazePathWithObstacles(maze, sr-1, sc, dr, dc, psf + "T", visited); //T
    printMazePathWithObstacles(maze, sr, sc+1, dr, dc, psf + "R", visited); //R
}

let mazeInput = [
    [1,0,1,1],
    [1,1,1,1],
    [1,0,1,1],
    [1,1,0,1]
]; 

let visitedInput = [
    [1,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
printMazePathWithObstacles(mazeInput, 0, 0, 3, 3, '', visitedInput);