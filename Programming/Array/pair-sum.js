//Given a sorted array, find pair of elements whose sum is equal to given number
//Solution - 1st using divide and conquer(Two pointer approach)
//This work if array has distinct elements who are part of pair for given sum, Print indices
//1,3,5,7,10,11,12,13
function pairSum_DC(a, k) {
    let start = 0;
    let end = a.length - 1;
    while (start < end) {
        if (a[start] + a[end] === k) {
            console.log(`For sum: ${k} - ${start},${end}`);
            start++;
            end--;
        } else if (a[start] + a[end] > k) {
            end--;
        } else {
            start++;
        }
    }
}
//pairSum_DC([1,3,5,7,10,11,12,13], 8);
//pairSum_DC([1,3,5,7,10,11,12,13], 15);


//Solution - 2nd using hashset
//This work if array has distinct elements who are part of pair for given sum, 
//Can't print indices because of HashSet
function pairSum_HashSet(a, sum) {
    //If we first create set and then look for pairs we will get duplicate 
    //pairs(1,2) and (2,1) and we have to devide/2.
    //const set = new Set();
    const set = new Set();
    for (const value of a) {
        let temp = sum - value;
        if (set.has(temp)) {
            console.log(`Pair : ${temp} , ${value}`);
        }
        else{
            //Here we won't get duplicate pairs we are checking for pairs while inserting
            set.add(value);
        }
    }
}
//pairSum_HashSet([1, 3, 5, 7, 10, 11, 12, 13], 8);
//pairSum_HashSet([1,3,5,7,10,11,12,13], 15);


//Solution - 2nd using hashmap
//This work if array has repetitive elements also, who are part of pair for given sum, 
//Can't print indices because of HashMap
function pairSum_HashMap(a, sum) {
    const map = {};

    //If we first create map and then look for pairs we will get duplicate 
    //pairs(1,2) and (2,1) and we have to devide/2.
    // for (const value of a) {
    //     map[value] = map[value] + 1 || 1;
    // }
    for (const value of a) {
        let temp = sum - value;
        if (map[temp]) {
            console.log(`Pair : ${temp} , ${value}`);
        }
        //Here we won't get duplicate pairs we are checking for pairs while inserting 
        map[value] = map[value] + 1 || 1;
    }
}

//pairSum_HashMap([1, 3, 5, 7, 10, 11, 12, 13], 8);
//pairSum_HashMap([1, 3, 5, 7, 10, 11, 12, 13, 5, 3, 5, 3], 15);

//Print pairs count
function countPair_HashMap(a, sum) {
    const map = {};
    for (const value of a) {
        map[value] = map[value] + 1 || 1;
    }

    let pair_count = 0;
    for (const value of a) {
        let temp = sum - value;
        if (map[temp]) {
            pair_count += map[temp];
        }

        // if (arr[i], arr[i]) pair satisfies the condition, then we need to ensure 
        // that the count is decreased by one such that the (arr[i], arr[i]) 
        // pair is not considered 
        if (temp === value) {
            pair_count--;
        }
    }
    // reduce pairsCount to half because in above process we counted pairs vice-versa
    //(means (1,2) & (2,1) also but it should be only ones)
    console.log(`Pair count : ${pair_count / 2}`);
}
//countPair_HashMap([1, 3, 5, 7, 10, 11, 12, 13], 8);
//countPair_HashMap([1, 3, 5, 7, 10, 11, 12, 13, 5, 3, 5, 3], 15);s