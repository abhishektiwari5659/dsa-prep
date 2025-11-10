// hash map

// function majority(arr){
//     let hash = {}
//     let n = arr.length
//     for(let i = 0; i < n; i++){
//         let num = arr[i]
//         if(hash[num]){
//             hash[num] += 1
//         }
//         else{
//             hash[num] = 1
//         }

//         if(hash[num] > n / 2){
//             return num
//         }
//     }
//     return -1
// }

// let arr =[2,2,1,1,1,2,2]
// console.log(mojority(arr))

//optimal solution

function majority(nums){
    let c= 0; let m = null
    for(let n of nums){
        if(c === 0){
            m = n
        }
        if(n === m){
            c++
        }
        else{
            c--
        }
    }
    return m
}

let arr =[2,2,1,1,1,2,2]
console.log(majority(arr))