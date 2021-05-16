//Subarray: continous small arrays
function generatingSubarrays(a){
    for (let i = 0; i < a.length; i++) {
        for (let j = i; j < a.length; j++) {
            //Print i to j
            let subarray = '';
            for (let k = i; k<=j ; k++) {
                subarray+=a[k]
                //console.log(a[k]); //Because ye new line me chala jata h                
            }
            console.log(subarray);
        }
    }
}

generatingSubarrays([1,2,3,4]);
//generatingSubarrays([-4,1,3,-2,6,2,-1,-4,7]);