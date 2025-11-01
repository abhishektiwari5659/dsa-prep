function countDigit(n){
    if(n == 0){
        return 1
    }

    n = Math.abs(n)
    let c = 0
    while(n > 0){
        n = Math.floor(n/10)
        c++
    }
    return c
}

console.log(countDigit(-98))