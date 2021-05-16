//A majority element in an array A[] of size n is an element that appears more than n/2 times
//(and hence there is at most one such element)

/* Solutions
1. Brute Force --> Two Loops O(n*n)
2. HashMap --> O(n) O(n)
3. Sorting --> O(nlogn) O(1)
4. Mooray Voting --> Best O(n) O(1)
 */
function majorityElement_MoorayVoting(a) {
   let candidate_index = 0;
   let count = 1;
   //Step 1: Finding a Candidate
   //The algorithm for the first phase that works in O(n) is known as Moore’s Voting Algorithm.
   //Basic idea of the algorithm is that if each occurrence of an element e can be cancelled with all 
   //the other elements that are different from e then e will exist till end it is a majority element.
   for (let i = 1; i < a.length; i++) {
      if(a[candidate_index] === a[i])
         count++;
      else
         count--;
      if(count === 0){
         candidate_index = i;
         count = 1;
      }
   }

   count = 0;
   //Step 2: Check if the element obtained in step 1 is majority element or not.
   //Traverse the array, check if count of candidate is greater than half the size of the array.
   for (let i = 0; i < a.length; i++) {
      if(a[i] === a[candidate_index])
         count++;      
   }

   if(count > a.length/2)
      console.log(`Majority element is: ${a[candidate_index]}`);
   else
   console.log("No majority element found");
}

majorityElement_MoorayVoting([1, 1, 2, 1, 3, 5, 1]);
majorityElement_MoorayVoting([3, 3, 4, 2, 4, 4, 2, 4, 4]);
majorityElement_MoorayVoting([3, 3, 4, 2, 4, 4, 2, 4]);