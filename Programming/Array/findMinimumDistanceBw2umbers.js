// Javascript program to find the minimum distance between two numbers
function minDist1(arr, x, y)
{
    var i, j;
    var n = arr.length;
    var min_dist = Number.MAX_VALUE;
     
    for(i = 0; i < n; i++)
    {
        for(j = i + 1; j < n; j++)
        {
            if ((x === arr[i] && y == arr[j] || y === arr[i] && x === arr[j]) 
                && min_dist > Math.abs(i - j)) {
                    min_dist = Math.abs(i - j);
            }
        }
    }
    console.log(min_dist);
}

//minDist1([1, 2], 1, 2);
//minDist1([3, 4, 5], 3, 5);
//minDist1([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3], 3, 6);
//minDist1([2, 5, 3, 5, 4, 4, 2, 3], 3, 2);

function minDist2(arr, x, y){
    let prev = -1;
    let min_dist = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; i++) {
        //we will check if p is not equal to -1 and If the element at current index matches with
        // the element at index p , If yes then updatethe minimum distance if needed
        if(x === arr[i] || y === arr[i]){
            if(prev !== -1 && arr[i] !== arr[prev]){
                min_dist = Math.min(min_dist,Math.abs(i - prev));
            }

            prev = i;
        }      
    }

    // If distance is equal to var max
    if(min_dist===Number.MAX_VALUE)
       return -1;
    return min_dist;
}

//minDist2([1, 2], 1, 2);
//minDist2([3, 4, 5], 3, 5);
//minDist2([3, 5, 4, 2, 6, 5, 6, 6, 5, 4, 8, 3], 3, 6);
console.log(minDist2([2, 5, 3, 5, 4, 4, 2, 3], 3, 2));