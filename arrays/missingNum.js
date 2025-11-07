function missingNums(arr){
    let len = arr.length
    let sum = (len * (len + 1)) / 2
    let x = 0
    for(let i =0; i < len; i++){
        x += arr[i]
    }
    return (sum - x)
}

let arr = [9,6,4,2,3,5,7,0,1]
console.log(missingNums(arr))