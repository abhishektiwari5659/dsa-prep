function revString(arr){
    let n = arr.length
    let half = Math.floor(n /2) 
    for(let i = 0; i < half; i++){
        let temp = arr[i];
        arr[i] = arr[n - 1 - i]
        arr[n - 1 -i] = temp;
    }
    return 1
}

let arr = ["h", "e", "l", "l", "o"];
console.log(revString(arr));
console.log(arr)