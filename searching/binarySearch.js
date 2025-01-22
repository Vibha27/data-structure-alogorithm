function binarySearch (array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (target === array[mid]) return mid
        else if (target < array[mid]) right = mid-1;
        else left = mid + 1
    }
    return -1
}

function binaryRecursiveSearch (array, target, left=0, right=array.length-1) {
    if (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (target === array[mid]) return mid
        else if (target < array[mid]) return binaryRecursiveSearch(array, target, left, mid-1)
        else if (target > array[mid]) return binaryRecursiveSearch(array, target, mid+1, right)
    } else {
        return -1
    }
}

const arr = [1,2,3,4,5]
console.log(binarySearch(arr, 2))
console.log(binaryRecursiveSearch(arr, 2))