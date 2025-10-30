function secondLargest(arr){
    let firstLargest = arr[0]
    let secondLargest = arr[0]
    for(let i = 0; i < arr.length; i++){
        if(firstLargest < arr[i]){
            secondLargest = firstLargest
            firstLargest = arr[i]
        }else if(secondLargest < arr[i] && firstLargest != arr[i]){
            secondLargest = arr[i]
        }

    }
    return secondLargest
}

let arr = [10, 11, 12, 12]
console.log(secondLargest(arr))