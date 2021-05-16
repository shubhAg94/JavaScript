function toh(src, dest, help, n){
    if(n === 0){
        return;
    }

    //Faith-1 (Move n-1 disks from src to help using dest)
    toh(src, help, dest, n-1);

    //2nd part of faith-1(Move nth disk from src to dest)
    console.log(`Move ${n} th disk from ${src} to ${dest}`);

    //Faith-2 (Move n-1 disks from help to dest using src)
    toh(help, dest, src, n-1);
}

toh("A", "B", "C", 3);