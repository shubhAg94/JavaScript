function checkPangram(str){

    // Create a array to mark the characters present in the string By default all the elements are false
    let mark = new Array(26).fill(false);

    // For indexing in mark[]
    let index = 0;

    // Traverse all characters
    for (let i = 0; i < str.length; i++) {
        // If uppercase character, subtract 'A' to find index.  
        if(str[i] >= 'A' && str[i] <= 'Z'){
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        }
        // If lowercase character, subtract 'a' to find index.  
        else if(str[i] >= 'a' && str[i] <= 'z'){
            index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        }
        // If this character is other than english lowercase and uppercase characters.
        else{
            continue;
        }
        
        mark[index] = true;
    }

    console.log(mark);

    // Return false if any character is unmarked
    for (const item of mark) {
        if(item === false){
            return false;
        }
    }

    // If all characters were present
    return true;
}

console.log(checkPangram('The quick brown fox jumps over the lazy dog'));
console.log(checkPangram('The quick brown fox jumps over the lajy dog'));