function linearSearch1(arr, item) {
    for (let el of arr) {
        if(el === item){
            return true;
        }
    }
    return false;    
}

// console.log(linearSearch1([1,50,86,15,32,15], 10));
// console.log(linearSearch1([1,50,86,15,32,15], 86));

function linearSearch2(a, item) {
    let i;
    for (i = 0; i < a.length; i++) {
        if(a[i] === item){
            console.log(`${item} found at ${i} index`);
            break;
        }
    }
    if(i===a.length){
        console.log(`${item} is not present`);
    }   
}

console.log(linearSearch2([1,50,86,15,32,15], 10));
console.log(linearSearch2([1,50,86,15,32,15], 86));