//find the element from the arr
function findElement(arr, e){
    for(let i = 0; i < arr.length; i++){
        if(e == arr[i]){
            return i
        }
    }
    return -1
}

let arr = [1, 2, 3, 8, 9, 0]

console.log(findElement(arr, 4))