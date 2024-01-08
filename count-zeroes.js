function countZeroes(arr) {
    let startIdx = 0;
    let endIdx = arr.length-1;
    let midIdx = Math.floor((endIdx-startIdx)/2) + startIdx;
    zerocount = 0;
    while (startIdx <= endIdx){
        if(arr[midIdx] === 0){
            zerocount = zerocount + endIdx - midIdx + 1;
            endIdx = midIdx - 1;
        }else{
            startIdx = midIdx + 1;
        }
        midIdx = Math.floor((endIdx-startIdx)/2) + startIdx;
    }
    return zerocount;
}

// module.exports = countZeroes