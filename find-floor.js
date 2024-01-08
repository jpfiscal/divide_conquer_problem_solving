function findFloor(arr, val) {
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);
    let floor = -1;
    console.log(`start: ${start}; end: ${end}; mid: ${mid}; floor:${floor}`);
    while (start <= end){
    
        if(arr[mid] > val){
            console.log(`${arr[mid]} is bigger than ${val}`);
            end = mid - 1;
            
        }else if (arr[mid] === val){
            console.log(`${arr[mid]} is equal to ${val}`);
            return arr[mid];
        }else{
            console.log(`${arr[mid]} is less than ${val}`);
            floor = arr[mid];
            start = mid+1;
        }
        mid = Math.floor((start+end)/2);
    }
    return floor;
}
// module.exports = findFloor;