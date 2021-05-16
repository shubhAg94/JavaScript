function createMap1(str){
  const map = {};
  for (let item of str) {
    if(!map[item]){
      map[item] = 1;
    } else {
      //map[item] += 1;
      // ++ operator do two things 1)increment 2) assignment
      // j = i++ --> in this case first it will assign then increment
      // j = ++i --> first increment then assign
      map[item]++; // this is equal to map[item] += 1; and map[item] = map[item] + 1;
    }
  }
  return map;
}
console.log(createMap1("HelloWorldh"));

function createMap2(str){
  const map = {};
  for (let item of str) {
    map[item] = map[item] + 1 || 1;
  }
  return map;
}
console.log(createMap2("HelloWorldh"));

//Approach - 3 with Map ES6 function
let str = "HelloWorldh";
let jsmap = new Map();
for (const char of str) {
  if(jsmap.has(char)){
    jsmap.set(char, jsmap.get(char)+1);
  } else{
    jsmap.set(char, 1);
  }
}
console.log(jsmap);

