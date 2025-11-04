function buySell(arr){
    let min = arr[0];
    let max = 0
    for(let i = 1; i < arr.length; i++){
        if((arr[i] - min) > max){
            max = arr[i] - min
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return max
}
let arr = [7,1,3,4,8,6,4]
console.log(buySell(arr));