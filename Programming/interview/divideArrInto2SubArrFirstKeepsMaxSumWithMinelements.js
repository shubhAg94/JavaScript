var arr = [5, 4, 6, 3, 2, 4, 1]
var length = arr.length;
var totalSum = 0;
 arr.forEach(element => {
	totalSum += element;
});
console.log(totalSum);
//output: divide array into two subarray where first subarray contains m,inimum element with max sum
//[6,5,4] [4,3,2,1]

arr.sort((a,b) => a-b);

var firstArr = [];
var secondArr = [];
var firstArrSum = 0;

for(let i = length-1; i > length/2; i--){
	if(firstArrSum < totalSum/2){
  		firstArr.push(arr[i]);
      firstArrSum += arr[i]
  }
	
}

for(let j = 0; j <= length/2; j++){
	secondArr.push(arr[j]);
}

console.log(firstArr);
console.log(secondArr);

