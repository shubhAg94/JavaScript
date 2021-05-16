var isPalindrome = function(x) {
    //if(x < 0)
        //return false;
    let num = x;
    let res = 0;
    while(num > 0){
        let rem = num % 10;
        res = res * 10 + rem;
        num = Math.floor(num / 10);
    }
    if(x === res)
        return true;
    else
        return false;
};
console.log(isPalindrome(121));