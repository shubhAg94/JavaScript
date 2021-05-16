/*
1) Use two index variables i and j, initial values i = 0, j = 0 
2) If arr1[i] is smaller than arr2[j] then print arr1[i] and increment i. 
3) If arr1[i] is greater than arr2[j] then print arr2[j] and increment j. 
4) If both are same then print any of them and increment both i and j. 
5) Print remaining elements of the larger array.
 */
function unionOfTwoSortedArray(a1, a2){

    //In case of duplicates we use set to remove them
    //a1 = [...new Set(a1)];
    //a2 = [...new Set(a2)];

    const union = [];
    let i = 0;
    let j = 0;
    while(i < a1.length && j < a2.length){
        if(a1[i] < a2[j]){
            union.push(a1[i++]);
        } 
        else if(a1[i] > a2[j]) {
            union.push(a2[j++]);
        } else{
            union.push(a1[i++]);
            j++;
        }
    }

    while(i < a1.length){
        union.push(a1[i++]);
    }
    while(j < a2.length){
        union.push(a2[j++]);
    }

    return union;
}

//console.log(unionOfTwoSortedArray([1, 2, 4, 5, 6], [2, 3, 5, 7]));

//To hadle duplicate we can use set
//console.log(unionOfTwoSortedArray([1, 2, 2, 2, 3], [2, 3, 4, 5]));

function intersectionOfTwoSortedArray(a1, a2){
    let i = 0;
    let j = 0;
    const intersection = [];

    while(i < a1.length && j < a2.length){
        if(a1[i] < a2[j]){
            i++;
        } else if(a2[j] < a1[i]){
            j++;
        } else{
            intersection.push(a1[i++]);
            j++;
        }
    }

    return intersection;
}
console.log(intersectionOfTwoSortedArray([1, 2, 4, 5, 6], [2, 3, 5, 7]));