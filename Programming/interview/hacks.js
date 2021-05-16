//console.log(1>2>3);
//console.log(1<2<3);

//Problem - 2
var x = 0; 
let y = 0;
const z = 0;

if (true) {
  var x = 1;
  let y = 1; 
  const z = 1;
}
//console.log(x); 
//console.log(y);
//console.log(z);

//Problem - 3
var a = 5;
var b = 0;

var c  = {
name: "VS",
age: 30
};

var d = {
"a": "b"
};

delete a;
delete b;
delete c;
delete d;
//console.log(a,b,c,d)//Nothing will bw deleted

//Problem - 4
var a = 1;
var b = 1;
var c = "1"+a+b;
//console.log("c=",c); //111
var res = a+b+"1";
//console.log("res",res)//21

//Problem - 5
var x = 5;
delete x;
// console.log(x); //5
// console.log(delete x);//Flase
// console.log(x);//5

//Problem - 6
var a = 1;
function add() {
    console.log(a);
    var a = 2;
}
//add();

//Problem - 7
var a = 10;
function output() {
	console.log(a);
	if (true){
		var a = 20;
	}
	console.log(a)
}
//output();

//Problem - 8
/*
- Write a function that would allow you to do this.
	var addSix = createBase(6);
	addSix(10); // returns 16
	addSix(21); // returns 27
 */

//Problem - 9
//f(2)(3) == 5

//Problem - 10 --> Output of :
const arr = [1,2,3,4,null,undefined,NaN];
console.log(arr.filter((item)=>true));
