function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // If the array is already sorted, return 0
        if (arr[left] <= arr[right]) {
            return left;
        }

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length;
        let prev = (mid + arr.length - 1) % arr.length;

        // Check if mid is the smallest element (pivot)
        if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
            return mid;
        }

        // If the right half is sorted, search in the left half
        if (arr[mid] <= arr[right]) {
            right = mid - 1;
        } else { // If the left half is sorted, search in the right half
            left = mid + 1;
        }
    }

    return -1; // In case of invalid input or empty array
}

// The function findRotationCount takes an array arr as input.
// It initializes left and right pointers to the start and end of the array respectively.
// Inside the while loop, it calculates the mid index using binary search.
// It checks if the array is already sorted. If yes, it returns left.
// It checks if the mid element is the smallest element (pivot) by comparing it with its adjacent elements (next and prev).
// If the left half is sorted, it updates right to mid - 1. If the right half is sorted, it updates left to mid + 1.
// It continues this process until left becomes greater than right.
// Finally, it returns -1 if the input array is empty or invalid.


module.exports = findRotationCount