function sortedFrequency(arr, num) {
    function findFirstOccurrence(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let firstOccurrence = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                firstOccurrence = mid;
                right = mid - 1; // Continue searching in the left half
            } else if (arr[mid] < target) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }

        return firstOccurrence;
    }

    function findLastOccurrence(arr, target) {
        let left = 0;
        let right = arr.length - 1;
        let lastOccurrence = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                lastOccurrence = mid;
                left = mid + 1; // Continue searching in the right half
            } else if (arr[mid] < target) {
                left = mid + 1; // Search in the right half
            } else {
                right = mid - 1; // Search in the left half
            }
        }

        return lastOccurrence;
    }

    const firstIndex = findFirstOccurrence(arr, num);
    const lastIndex = findLastOccurrence(arr, num);

    if (firstIndex !== -1 && lastIndex !== -1) {
        return lastIndex - firstIndex + 1;
    } else {
        return -1;
    }
}

// The function sortedFrequency first defines two helper functions: findFirstOccurrence and findLastOccurrence, which find the first and last occurrences of the target number in the array using binary search.
// It then calls these helper functions to find the indices of the first and last occurrences of the number num in the array arr.
// If both first and last occurrences are found, it calculates the frequency of num by subtracting the first index from the last index and adding 1 (to include both occurrences).
// If the number is not found in the array, it returns -1.


module.exports = sortedFrequency