function swap1(a){
    const tmp = a[1];
    a[1] = a[3];
    a[3] = tmp;

    return a;
}

function swap2(a){
    [a[1], a[3]] = [a[3], a[1]]

    return a;
}

console.log(swap1([0,1,2,3,4]))

console.log(swap1([10,11,12,13,14]))


