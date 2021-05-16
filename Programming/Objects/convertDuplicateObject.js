/* Output should be:
[
  {
    id: 3, 
    objArray: [
     {name: 'Central Microscopy', fiscalYear: 2018 }, 
     {name: 'Central Microscopy', fiscalYear: 2017 }
    ]
  }
  {
    id: 6, 
    [
     {name: 'Central Microscopy', fiscalYear: 2017 }
    ]
  }
]
 */

const array = [
    { id: 3, name: 'Central Microscopy', fiscalYear: 2018 },
    { id: 5, name: 'Crystallography Facility', fiscalYear: 2018 },
    { id: 3, name: 'Central Microscopy', fiscalYear: 2017 },
    { id: 5, name: 'Crystallography Facility', fiscalYear: 2017 }
  ];

let map = {};
var res = [];
for(let el of array){
  //map[el.id] = map[el.id] + 1 || 1;
  if(!map[el.id]){
    var obj = {};
    obj.id = el.id;
    obj.objArray = [];
    
    var nestedObj = {};
    nestedObj.name = el.name;
    nestedObj.fiscalYear = el.fiscalYear;
    
    obj.objArray.push(nestedObj);
    
    res.push(obj);
    
    map[el.id] = 1;
    
  } else{
    map[el.id] = map[el.id] + 1;
    for(let item of res){
      var nestedObj = {};
      nestedObj.name = el.name;
      nestedObj.fiscalYear = el.fiscalYear;
      if(item.id === el.id){
        item.objArray.push(nestedObj);
      }
    }
  }
}

console.log(res);