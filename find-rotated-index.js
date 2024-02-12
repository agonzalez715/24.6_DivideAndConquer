function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === num) {
            return mid; // Found the target number, return its index
        }

        if (arr[left] <= arr[mid]) {
            // Left half is sorted
            if (num >= arr[left] && num < arr[mid]) {
                right = mid - 1; // Search in the left half
            } else {
                left = mid + 1; // Search in the right half
            }
        } else {
            // Right half is sorted
            if (num > arr[mid] && num <= arr[right]) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }
    }
    
    return -1; // Number not found
}

// The function findRotatedIndex takes a rotated array arr and a number num as input.
// It initializes left and right pointers to the start and end of the array respectively.
// Inside the while loop, it calculates the mid index using binary search.
// It checks if the element at mid is equal to num. If yes, it returns mid.
// If the left half of the array is sorted, it checks if num falls within the range of the left half. If yes, it updates right to mid - 1, otherwise updates left to mid + 1.
// If the right half of the array is sorted, it checks if num falls within the range of the right half. If yes, it updates left to mid + 1, otherwise updates right to mid - 1.
// If num is not found after the loop terminates, it returns -1.


module.exports = findRotatedIndex