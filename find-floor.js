function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1; // Initialize floor to -1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === x) {
            return arr[mid]; // Found exact match, so return x
        } else if (arr[mid] < x) {
            floor = arr[mid]; // Update floor to the current element
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    
    return floor; // Return the floor found
}

// Test cases
console.log(findFloor([1,2,8,10,10,12,19], 9)); // Output: 8
console.log(findFloor([1,2,8,10,10,12,19], 20)); // Output: 19
console.log(findFloor([1,2,8,10,10,12,19], 0)); // Output: -1
 
//The function findFloor takes a sorted array arr and a value x as input.
// It initializes left and right pointers to the start and end of the array respectively.
// It also initializes floor to -1, which will hold the largest element smaller than or equal to x.
// Inside the while loop, it calculates the mid index using binary search.
// If the element at mid is equal to x, it returns x.
// If the element at mid is less than x, it updates floor to the current element and moves the left pointer to search in the right half.
// If the element at mid is greater than x, it moves the right pointer to search in the left half.
// Finally, it returns the floor found after the loop terminates.

module.exports = findFloor