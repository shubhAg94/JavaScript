function removeConsecutiveDuplicates1(str){
    let unique = ''+str[0];
    for (let i = 1; i < str.length; i++) {
        if(str[i] !== str[i-1]){
            unique += str[i];
        }        
    }
    return unique;
}
console.log(removeConsecutiveDuplicates1('ccoooding'));
console.log(removeConsecutiveDuplicates1('ccooodingn'));