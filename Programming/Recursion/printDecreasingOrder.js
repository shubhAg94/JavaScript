function printInDescringOrder(n){
    if(n===0){
        return;
    }

    //This will print in decreasing order
    //Because this will be executing while winding(going-downwards) the function calls
    console.log(n); 
    printInDescringOrder(n-1);

    //It will print in increasing order
    //Because this will be executing while un-winding(returning/coming-back/going-upwnwards) the function calls So,
    //It will start from base case
    //console.log(n); 
}

printInDescringOrder(5);