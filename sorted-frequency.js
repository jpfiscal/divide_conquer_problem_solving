function sortedFrequency(arr, val) {
    let firstFound = findFirst(arr,val);
    let lastFound = findLast(arr,val);
    if (firstFound === -1 || lastFound === -1){
        return -1;
    }else{
        return lastFound-firstFound+1;
    }
}
function findFirst(arr,val,start=0, end=arr.length-1){
    if(start <= end){
        let mid = Math.floor((end+start)/2);
        if(arr[mid] === val){
            if(arr[mid-1] < val || mid === 0){
                console.log(`first found at ${mid}!`)
                return mid;
            }else{
                return findFirst(arr,val,start,mid-1);
            }
        }else if(arr[mid] > val){
            return findFirst(arr,val,start,mid-1);
        } else {
            return findFirst(arr,val,mid+1,end);
        }
    }
    return -1;
}
function findLast(arr,val,start=0, end=arr.length-1){
    if(start <= end){
        let mid = Math.floor((end+start)/2);
        if(arr[mid] === val){
            if(arr[mid+1] > val || mid === arr.length-1){
                console.log(`last found at ${mid}!`)
                return mid;
            }else{
                return findLast(arr,val,mid+1,end);
            }
        }else if(arr[mid] > val){
            return findLast(arr,val,start,mid-1);
        } else if (arr[mid] < val){
            return findLast(arr,val,mid+1,end);
        }
    }else{
        return -1;
    }
}

// module.exports = sortedFrequency