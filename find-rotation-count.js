function findRotationCount(arr) {
    let start = 0;
    let end = arr.length-1;
    while (start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] < arr[mid-1]){
            return mid;
        }else if(arr[mid] > arr[mid+1]){
            return mid + 1;
        }else{
            if(arr[mid]<arr[0]){
                end = mid-1;
            }else{
                start = mid + 1;
            }
        }
    }
    return 0;
}

// module.exports = findRotationCount