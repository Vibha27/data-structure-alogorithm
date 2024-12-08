function selectionSort(unsortedArr) {
    let len = unsortedArr.length;
    let min, temp;
    for (let i = 0; i<len; i++) {
        min = i;
        for (let j = i+1; j<len; j++) {
            if (unsortedArr[j] < unsortedArr[min]) {
                min = j;
            }
        }
        temp = unsortedArr[i];
        unsortedArr[i] = unsortedArr[min]
        unsortedArr[min] = temp;
    }
    return unsortedArr
}

const arr = [21,4,4,90,14];
console.time();
console.log(selectionSort(arr))
console.timeEnd()