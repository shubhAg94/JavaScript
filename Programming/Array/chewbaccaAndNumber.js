function chewbaccaAndNumber(arr){
    let i = 0;
    if(arr[i] === 9){
        i++;
    }

    for(; i < arr.length; i++){
        // if(9 - arr[i] < arr[i]){
        //     arr[i] = 9 - arr[i];
        // }

        //Better(Simpler) IF condition
        if(arr[i] >= 5){
            arr[i] = 9 - arr[i];
        }
    }

    return arr;
}

console.log(chewbaccaAndNumber([4,3,7,1]));