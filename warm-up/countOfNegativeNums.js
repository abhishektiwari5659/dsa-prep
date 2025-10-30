function countNum(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            count++
        }
    }
    return count
}

let arr = [0, 1, 2, 3, 4, -9, -8, -7]
console.log(countNum(arr))