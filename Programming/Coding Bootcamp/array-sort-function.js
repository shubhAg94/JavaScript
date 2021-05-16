const a = [1, 30, 4, 21, 100000];
//The sort() method sorts the elements of an array in place and returns the sorted array. 
//converting elements into string, then comparing UTF-16 code values.(Best for Strings)
a.sort(); //Works --> dictionary based sort
console.log('Sort without comapre method: ', a)


//For numeric array 
function compare1(a, b) {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

//Concise
function compareNumbers(a, b) {
    return a - b;
}

a.sort(compare1);

//More Consice
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);







