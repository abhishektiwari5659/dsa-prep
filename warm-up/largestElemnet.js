function largestElement(arr){
    let maxElement = arr[0];
    let i;
    for(i = 0; i < arr.length; i++){
        if(maxElement < arr[i]){
            maxElement = arr[i]
        }
    }
    return maxElement
}

let arr = [-1, -2, 0]
console.log(largestElement(arr))