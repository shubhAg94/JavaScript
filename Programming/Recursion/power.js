function power(x, n){
    if(n === 0){
        return 1;
    }

    let smallOutput = power(x, n-1);
    let output = x * smallOutput;
    return output;
}

//console.log(power(2, 5));

function powerWithBinaryExponentiaion(x, n){
    if(n === 0){
        return 1;
    }

    //Math.floor is required in JS because 3/2 = 1.5
    //in C# 3/2 = 1
    let smallOutput = powerWithBinaryExponentiaion(x, Math.floor(n/2));
    let output = null;
    if(n%2 === 0){
        output = smallOutput * smallOutput;
    } else{
        output = smallOutput * smallOutput * x;
    }
    
    return output;
}

console.log(powerWithBinaryExponentiaion(2, 3));

