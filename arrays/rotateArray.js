function rotateArr(arr, k){
    // let arrCopy = []
    // for(let i = 0; i < arr.length; i++){
    //     arrCopy[(k + i) % arr.length] = arr[i]
    // }
    // for(let i = 0; i < arr.length; i++){
    //      arr[i] = arrCopy[i]

    // }
    // return arr
    k = k % arr.length
    const rev = (s, e) => {
        while(s < e){
            [arr[s], arr[e]] = [arr[e], arr[s]]
            s++
            e--
        }
    }
    rev(0, arr.length - 1)
    rev(0, k -1)
    rev(k, arr.length - 1)
    return arr
}

let arr = [1,2,3,4,5,6,7]
console.log(rotateArr(arr, 8))