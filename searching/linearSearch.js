function linearSearch (arr = [], searchElement=null) {
    if (arr.length && searchElement) {
        let index = -1;
        for (let i=0; i<arr.length; i++) {
            if (arr[i] === searchElement) {
                index = i;
                break;
            }
        }
        return index
    }

}

const arr = [1, 2, 3 ,4];
console.log(linearSearch(arr, 8))