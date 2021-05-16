//https://stackoverflow.com/questions/29991016/iterative-solution-for-flattening-n-th-nested-arrays-in-javascript/29991836
const arr = [1, 2, [3, [[4]], 5, [6]], 7, 8];

function flatArray(arr) {
    return arr.reduce((accu, current) => {
        return accu.concat(Array.isArray(current) ? flatArray(current) : current);
    }, []);

}
console.log(flatArray(arr));

var flatten = function(input) {
    var result = [];

    input.forEach(function(element) {
        result = result.concat(Array.isArray(element) ? flatten(element) : element);
    });

    return result;
}
console.log(flatten(input));

//3: concat and recursion --> Third Best(For All levels)
var flattenArray = function (arr) {
    var results = [];
    arr.forEach(function (item) {
        if (Array.isArray(item)) {
            results = results.concat(flattenArray(item));
        } else {
            results.push(item);
        }
    });
    return results;
}
//console.log(flattenArray([2, [3, 4, [5], [6, [7, [8]]], 5]]));








