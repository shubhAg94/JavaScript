function findAllMazePath2Directions_Reactive(sr, sc, dr, dc, psf){
    //Negative Base Case
    if(sr > dr || sc > dc){
        return;
    }

    //Positive Base Case
    if(sr === dr && sc === dc){
        console.log(psf);
        return;
    }

    findAllMazePath2Directions_Reactive(sr, sc + 1, dr, dc, psf + "H"); // Horizontal Move
    findAllMazePath2Directions_Reactive(sr + 1, sc, dr, dc, psf + "V"); // Vertical Move
}

//findAllMazePatha2Directions_Reactive(0,0,2,2,'');

function findAllMazePath2Directions_Proactive(sr, sc, dr, dc, psf){
    //Negative Base Case
    if(sr > dr || sc > dc){
        return;
    }

    //Positive Base Case
    if(sr === dr && sc === dc){
        console.log(psf);
        return;
    }

    if(sc+1 <= dc)
    findAllMazePath2Directions_Proactive(sr, sc + 1, dr, dc, psf + "H"); // Horizontal Move
    if(sr+1 <= dr)
    findAllMazePath2Directions_Proactive(sr + 1, sc, dr, dc, psf + "V"); // Vertical Move
}

findAllMazePath2Directions_Proactive(0,0,2,2,'');
 
