//This will give last occurence of an item in this recursive linear search
function lastOcc(arr, n, item){
    //Base Case - 1
    if(n < 0){
        return -1;
    }

    //Base Case - 2


    //Breaking the array into 2 parts
    //Part one - 1(length)
    //Part two - (n-1)length (smaller array starting from 2nd elemetn --> arr.slice(1))
    let i = lastOcc(arr.slice(1), n-1, item);

    if(i === -1){
        //Why this condition is inside, because we are making sure if item is not cound in the subarray 
        //than only we check in the first part, if we already found in subarray then that will be the
        //last occurence
        if(arr[0] === item){
            return 0;
        } else{
            return -1;
        }
    }

    /* Below code again same as firstOcc as this will give the firstOcc
    if(arr[0] === item){
        return 0;
    }

    if(i === -1){
            return -1;
    }
    */

    //Why to add, because while going-downwards we passed array by removing first element
    //and send a subaarry staritng from index 1. That's why we are adding 1 to get the actual index
    return i + 1;
}

console.log(lastOcc([1,2,5,3,4,5], 6, 5));