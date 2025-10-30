function smallestElement(arr){
    if(arr.length == 0){
        return null
    }
    let smallest = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i]
        }
    }
    return smallest
}

let a = [8,9]
console.log(smallestElement(a))