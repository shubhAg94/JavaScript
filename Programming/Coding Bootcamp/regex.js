// const word = "HI THERE!!!!";
// let newWord = word.replace(/[^\w]/g, "").toLowerCase();
// console.log(newWord)

// \w -> Find a word character 
// ^\w -> except a word character => word.replace(/[^\w]/g, "") -> replace non word charecter with empty string.  
const word = "HI THERE!!!!123";
console.log(word.replace(/[^\w]/g, "").toLowerCase());

let str = "Give 100%!";
console.log(str.replace(/[\s]/g, ""));

