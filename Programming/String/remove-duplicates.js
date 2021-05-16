function removeDuplicates_UsingSet(str){
    const set = new Set(str);
    return set;
}

//console.log(removeDuplicates_UsingSet('abbacdde'));

function removeDuplicates_UsingNewString(str){
    let unique = '';
    for (const char of str) {
        if(!unique.includes(char)){
            unique += char;
        }
        //or
        // if(unique.indexOf(char)==-1){
        //     unique += char;
        // }
    }
    return unique;
}
console.log(removeDuplicates_UsingNewString('abbacdde'));