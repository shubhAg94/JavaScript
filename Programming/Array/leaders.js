function printLeaders(a){
    let leaderArray = [];
    let max = a[a.length-1];
    leaderArray.push(max);
    for (let i = a.length - 2; i >= 0; i--) {
        if(a[i] > max){
            max = a[i];
            leaderArray.push(max);
        }
    }
    return leaderArray;
}

console.log(printLeaders([16,17,4,3,5,2]));