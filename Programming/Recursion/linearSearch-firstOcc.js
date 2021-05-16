//This will give first occurence of an item in this recursive linear search
function firstOcc(arr, n, item){
    //Base Case - 1
    if(n < 0){
        return -1;
    }

    //Base Case - 2
    if(arr[0] === item){
        return 0;
    } 
    
    //Breaking the array into 2 parts 
    //Part one - 1(length)
    //Part two - (n-1)length (smaller array starting from 2nd elemetn --> arr.slice(1))
    let i = firstOcc(arr.slice(1), n-1, item);
    if(i === -1){
        return -1;
    }
    //Why to add, because while going-downwards we passed array by removing first element 
    //and send a subaarry staritng from index 1. That's why we are adding 1 to get the actual index
    return i + 1;
}

console.log(firstOcc([1,2,3,4,5], 5, 4));