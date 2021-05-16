function removeConsecutiveDuplicates1(a){
    let prev = 0 //Good concept of keeping track of last filled index
    for (let i = 1; i < a.length; i++) {
        if(a[i] === a[prev]){
            a.splice(i,1);
            i--;
        } else{
            prev++;
        }        
    }
    return a;
}
console.log(removeConsecutiveDuplicates1([1,1,2,2,2,3,4,4,5]));
console.log(removeConsecutiveDuplicates1([1,2,2,2,3,4,4,5,1,]));