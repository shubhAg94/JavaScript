function sentenceCapitalization1(str) {
    let newArr = [];

    for (let word of str.split(' ')) {
        newArr.push(word[0].toUpperCase() + word.slice(1, word.length));
    }
    return newArr.join(' ');
}

//console.log(sentenceCapitalization1('a short sentence'));

function sentenceCapitalization2(str) {
    let capString = str[0].toUpperCase();
    let isSpace = false;
    for (let i = 1; i < str.length; i++) {
        if (isSpace) {
            capString += str[i].toUpperCase();
            isSpace = false;
        } else {
            capString += str[i];
        }
        if (str[i] === ' ') {
            isSpace = true;
        }
    }
    return capString;
}
//console.log(sentenceCapitalization2('a short sentence'));

//Solution 3 ---> Best Solution
function sentenceCapitalization3(str) { 
    let capString = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i - 1] === ' ') {
            capString += str[i].toUpperCase();
        } else {
            capString += str[i];
        }
    }
    return capString;
}

//console.log(sentenceCapitalization3('a short sentence'));