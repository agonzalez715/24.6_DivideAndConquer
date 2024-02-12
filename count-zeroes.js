// To solve this problem efficiently with a time complexity of O(log N), we can utilize a binary search approach. Since the array is sorted with all 1s followed by all 0s, we can search for the first occurrence of 0 using binary search. Once we find the first occurrence of 0, the number of zeroes in the array will be equal to the index where 0 is found subtracted from the length of the array.

function countZeroes(arr) {
  let left = 0; //this represents the left pointer of the binary search
  let right = arr.length - 1; //this represents the right pointer in the binary search, it points to the end of the index initially 
  while(left <= right) { //this initiates the while loop that continues until until the condition in parentheses is met, this loop is responsible  for the binary search
    let mid = Math.floor((left + right) / 2); //Calculate the index of the middle element using binary search by taking the floor of the average of left and right.
    if (arr[mid] === 1) { //check if the element at the middle index mid is equal to 1
        left = mid = + 1; //if the element at mid is 1, update the 'left' pointer to mid + 1, this effectively moves the search range to the right half of the array 
    } else if (arr[mid] === 0) { //Check if the element at the middle index mid is equal to 0.
        right = mid + 1 //f the element at mid is 0, update the right pointer to mid - 1. This effectively moves the search range to the left half of the array.
    }
  }
  // At this point, left points to the first occurrence of 0
    // Number of zeroes will be equal to arr.length - left
    return arr.length - left;
}

module.exports = countZeroes




