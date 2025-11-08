function rotateAndSort(arr){
    let c = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] > arr[i]){
            c++
        }

    }
    if(arr[arr.length -1] > arr[0]){
        c++
    }
    return c <= 1
}

console.log(rotateAndSort([3,4,5,1,2]))