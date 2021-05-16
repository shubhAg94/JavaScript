var data = [
    { id: 0,
        name: 'a1',
        child: [
            { id: 1,
                name: 'a2',
                child: [
                    { id: 1,
                        name: 'a3',
                        child: []
                    }
                ]
            }, { id: 2,
                name: 'a4',
                child: [] }
        ]
    }
];

function printName(arr){
    for(let obj of arr){
        console.log(obj.name);
        printName(obj.child);
    }
}

printName(data);