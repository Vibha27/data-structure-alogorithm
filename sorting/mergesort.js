function mergeSort(a) {

    if (a.length <= 1) return a;

    let mid = a.length/2;
    let leftArr = mergeSort(a.slice(0,mid));
    let rightArr = mergeSort(a.slice(mid));

    return merge(leftArr, rightArr)

}

function merge (left, right) {
    let sortedArr = [];
    let i=0, j=0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        } else {
            sortedArr.push(right[j]);
            j++;
        }
    }
    console.log(left, right, "=>", [...sortedArr, ...left.slice(i), ...right.slice(j)])

    return [...sortedArr, ...left.slice(i), ...right.slice(j)]
}

const arr = [3,1,2,4,5]
// console.log(mergeSort(arr))
mergeSort(arr)