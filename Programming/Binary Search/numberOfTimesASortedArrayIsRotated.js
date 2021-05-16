function numberOfTimesASortedArrayIsRotated(arr) {
    // If the list has just one element then return that element.
    if (arr.length == 1) {
        return arr[0];
    }

    let start = 0;
    let end = arr.length - 1;

    // if the last element is greater than the first element then there is no rotation.
    // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
    // Hence the smallest element is first element. A[0]
    if (arr[start] > arr[0]) {
        return 0;
      }

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);

        //If element is min then return(min element will be less then left and right elements
        //Below condition fails if min element is at last position for that we will find
        // next = (mid + 1) % arr.length
        // if(arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]){
        //     return mid;
        // }
        nextIndex = (mid + 1) % arr.length;//For last element nextIndex will be arr[0]
        if(arr[mid] < arr[nextIndex] && arr[mid] < arr[mid - 1]){
            return mid;
        }

        //We know that we will get minimum element in the unsorted array..so we need to find out
        //the unsorted array and continue BS in the unsorted array.
        //How to find which part is unsorted array:
        // 1. If arr[mid] > a[0] means right part is unsorted
        // 2. If arr[mid] < a[n-1] means left part is unsorted 
        if(arr[mid] > arr[0]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}

console.log(numberOfTimesASortedArrayIsRotated([11,12,15,18,2,5,6,8]));
console.log(numberOfTimesASortedArrayIsRotated([3,4,5,6,7,8,2]));

/*https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solution/
//Differ approach to find min element by comparing left or right element
class Solution {
  public int findMin(int[] nums) {
    // If the list has just one element then return that element.
    if (nums.length == 1) {
      return nums[0];
    }

    // initializing left and right pointers.
    int left = 0, right = nums.length - 1;

    // if the last element is greater than the first element then there is no rotation.
    // e.g. 1 < 2 < 3 < 4 < 5 < 7. Already sorted array.
    // Hence the smallest element is first element. A[0]
    if (nums[right] > nums[0]) {
      return nums[0];
    }

    // Binary search way
    while (right >= left) {
      // Find the mid element
      int mid = left + (right - left) / 2;

      // if the mid element is greater than its next element then mid+1 element is the smallest
      // This point would be the point of change. From higher to lower value.
      if (nums[mid] > nums[mid + 1]) {
        return nums[mid + 1];
      }

      // if the mid element is lesser than its previous element then mid element is the smallest
      if (nums[mid - 1] > nums[mid]) {
        return nums[mid];
      }

      // if the mid elements value is greater than the 0th element this means
      // the least value is still somewhere to the right as we are still dealing with elements
      // greater than nums[0]
      if (nums[mid] > nums[0]) {
        left = mid + 1;
      } else {
        // if nums[0] is greater than the mid value then this means the smallest value is somewhere to
        // the left
        right = mid - 1;
      }
    }
    return -1;
  }
}
 */