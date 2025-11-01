let isPalindrome = function isPalindrome(num){
    if(num == 0){
        return true
    }
    let numCopy = num

    let rev = 0
    while(num > 0){
        let rem = num % 10
        rev = (10 * rev) + rem
        num = Math.floor(num/10)
    }
    if(rev == numCopy){
        return true
    }
    else{
        return false
    }
}

console.log(isPalindrome(121))