function revArray1(arr){
    for (let i = arr.length-1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

//revArray1([1,2,3,4,5,6]);

function revArray2(array){
    for (let i = 0, j=array.length-1; i < j; i++,j--) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp       
    }
    return array;
}

//console.log(revArray2([1,2,3,4,5,6]));

function revArray3(arr){
    arr.reverse();
}

let array = [1,2,3,4,5,6];
revArray3(array);
console.log(array);