var users = [
    { name: "A", age: 25, address: "Ad" },
    { name: "B", age: 27, address: "Ad" },
    { name: "C", age: 26, address: "Ad" },
    { name: "A", age: 28, address: "Ad" },
    { name: "B", age: 25, address: "Ad" }
];

function findDuplicates_Map() {
    let map = {};
    for (const user of users) {
        map[user.name] = map[user.name] + 1 || 1;
    }
    return map;
}
//console.log(findDuplicates_Map());

function findDuplicates_Set() {
    //console.log(users.map(user => user.name)); //[ 'A', 'B', 'C', 'A', 'B' ]
    const unique = Array.from(new Set(users.map(user => user.name)));
    console.log(unique);
}
//findDuplicates_Set();
//////////////////////////////////////////////////////////////////////////////////l
function removeDuplicates_SpliceAndMap() {
    let map = {};
    for (let i = 0; i < users.length; i++) {
        if ((map[users[i].name])) {
            users.splice(i, 1);
            i--;
        } else {
            map[users[i].name] = map[users[i].name] + 1 || 1;
        }
    }
    console.log(users);
}
//removeDuplicates_SpliceAndMap();

////https://dev.to/marinamosti/removing-duplicates-in-an-array-of-objects-in-js-with-sets-3fep
function removeDuplicates_SetAndFind() {
    const unique = Array.from(new Set(users.map(a => a.name)))
        .map(name => {
            return users.find(a => a.name === name)
        });
    console.log(unique);
}
removeDuplicates_SetAndFind();


