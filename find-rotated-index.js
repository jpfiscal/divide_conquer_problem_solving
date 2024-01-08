function findRotatedIndex(arr, val) {
    start = 0;
    end = arr.length-1;
    //find the rotation point
    RotPt = findRotPoint(arr);
    //binary search on left side
    leftVal = binarySearch(arr,val,0,RotPt-1);
    //binary search on right side
    rightVal = binarySearch(arr,val,RotPt,end);
    //return larger index of left search and right search
    if(leftVal > rightVal){
        return leftVal;
    }else{
        return rightVal;
    }
}

function binarySearch(arr,val,leftIdx,rightIdx){
    while (leftIdx <= rightIdx) {
        // find the middle value
        let mid = Math.floor((leftIdx + rightIdx) / 2);
        let midVal = arr[mid];
        if (midVal < val) {
          leftIdx = mid + 1;
        } else if (midVal > val) {
          rightIdx = mid - 1;
        } else {
          return mid;
        }
    }
    return -1;
}

function findRotPoint(arr,start=0,end=arr.length-1){
    mid = Math.floor((end+start)/2);
    while (start <= end){
        if(arr[mid] < arr[mid-1]){
            return mid;
        }else if(arr[mid] > arr[mid+1]){
            return mid+1;
        }else{
            if(arr[mid]<arr[0]){
                return findRotPoint(arr,start,mid-1);
            }else{
                return findRotPoint(arr,mid+1,end);
            }
        }
    }
}
// module.exports = findRotatedIndex