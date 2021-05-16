function createSet(a){
    // const set = new Set(a);
    // return set;
    
    //======OR=======
    //return [...new Set(a)]; //Converts a set into array

    //======OR=======
    return Array.from(new Set(a)); //Converts a set into array
}

console.log(createSet([1,2,4,1,2,4,5,6,3,8,8,3,7]));

console.log(createSet('abacdc'));