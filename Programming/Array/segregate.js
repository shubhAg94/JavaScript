/*Solutions: for Move All Zeros End
1. Sort In Descending Order --> O(n*logn) O(1)
2. Copying Non Zero Elements To New Array --> O(n) O(n)
3. Push forward non zeros elements, than add remaining zeros to the end --> O(n) O(1)
4. Best Solution(Swapping) O(n) and Nice Technique --> O(n) O(1)
 */
function moveAllZerosEnd(a){
    let temp;
    let count = 0 ;
    for (let i = 0; i < a.length; i++) {
        if(a[i] !== 0){
            temp = a[count];
            a[count] = a[i];
            a[i] = temp;
            count++;
        }
    }
    return a;
}
//console.log(moveAllZerosEnd([0,1,0,0,1,0,1,1,0,1,1]));

/*
Move All Odd Numbers To End --> Swapping Solution O(n)
Rearrange positive and negative numbers --> Swapping Solution O(n)
 */

/*
Segregate 0's and 1's in an array --> Same above Swapping Solution O(n)
One More Solution with --> Dutch National Flag with 2 pointers(Left and Right)
DNF algo uses nested loops not sure for O(n) but almost O(n)[Not best for this problem]
Best for segregating 0,1 and 2

Find 1 from left and 0 from right then swap and keep going on
Do following while left < right --> while (left < right)  
a) Keep incrementing index left while there are 0s at it
b) Keep decrementing index right while there are 1s at it
c) If left < right then swap arr[left] and arr[right]
 */

/* Algoritham --> https://www.coderbyte.com/algorithm/dutch-national-flag-sorting-problem

Segregate 0's, 1's and 2's in an array --> Sorting, Counting 0, 1 and 2
Best Solution --> O(n) O(1) Dutch-Flag with 3 pointers

(1) Create a low pointer at the beginning of the array and a high pointer at the end of the array.
(2) Create a mid pointer that starts at the beginning of the array and iterates through each element.
(3) If the element at arr[mid] is a 2, then swap arr[mid] and arr[high] and decrease the high pointer by 1.
(4) If the element at arr[mid] is a 0, then swap arr[mid] and arr[low] and increase the low and mid pointers by 1.
(5) If the element at arr[mid] is a 1, don't swap anything and just increase the mid pointer by 1
 */
function segregate012(a){
    let left = 0;
    let mid = 0;
    let right = a.length - 1;
    while(mid <= right){
        if(a[mid] === 2){
            swap(a, mid, right);
            right--;
        } else if(a[mid] === 0){
            swap(a, mid, left);
            left++;
            mid++;
        } else{
            mid++;
        }
    }
    return a;
}
function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
console.log(segregate012([2,0,0,1,2,0]));
console.log(segregate012([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));