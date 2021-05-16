function formBiggestNumber(arr){
    return arr.sort(myComapre);
}

function myComapre(a, b){
    
    let ab = ''+a+b;
    let ba = ''+b+a;

    return ba - ab;

    // if (ab < ba) {
    //     return 1;
    // }
    // if (ab > ba) {
    //     return -1;
    // }
    // // a must be equal to b
    // return 0;
}

console.log(formBiggestNumber([54, 546, 548, 60]));
console.log(formBiggestNumber([1, 34, 3, 98, 9, 76, 45, 4]));