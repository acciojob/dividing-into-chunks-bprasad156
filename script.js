

function divideIntoChunks(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

const inputArray = [1, 2, 3, 4, 1, 0, 2, 2];
const maxSum = 5;
const subarrays = divideIntoChunks(inputArray, maxSum);
console.log(subarrays);
