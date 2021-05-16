function vowel1(str){
    let vowels = 'aeiou';
    let counter = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.indexOf(char) >= 0 ) {
            counter++
        }
    }
    return counter;
}
//console.log(vowel1('Why do you ask'));

function vowel2(str){
    let vowels = 'aeiou';
    let counter = 0;
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            counter++
        }
    }
    return counter;
}
//console.log(vowel2('Why do you ask'));

function vowel3(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}
console.log(vowel3('Why do you ask'));