//This will give last occurence of an item in this recursive linear search
function allOcc(arr, i, n, item){
    //Base Case - 1
    if(i === n){
        return;
    }

    if(arr[i] === item){
        console.log(i);
    }

    allOcc(arr, i+1, n, item);
}

console.log(allOcc([1,2,5,3,4,5], 0, 6, 5));