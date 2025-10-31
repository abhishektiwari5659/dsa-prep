//1st pattern 
//  ****
//  ****
//  ****
//  ****
// function star(n){
    
//     for(let i =0; i < n; i++){
//         let r = ' '
//         for(let j= 0; j < n; j++){
//             r = r + "*"
//         }
//         console.log(r)
//     }
// }
// star(4)

//2nd pattern
//  *
//  **
//  ***
//  ****

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5 

// let n =5
// for(let i = 1; i <= n; i++){
//     let r = " "
//     for(let j = 1; j <= i; j++){
//         r += j + " ";
//     }
//     console.log(r)
// }



//  3rd       4th pattern
//  1 1 1 1 1  * * * * *  
//  2 2 2 2    * * * *  
//  3 3 3      * * *
//  4 4        * *
//  5          * 


// n = 5
// for(let i = 1; i <= n; i++){
//     let r = ' '
//     for(let j = 0; j <= n - i ; j++){
//         r = r + ("*" + " ")
//     }
//     console.log(r)
// }


//5th 
//      *
//     **
//    ***
//   ****
//  *****


// let n = 5
// for(let i = 0; i < n; i++){
//     let r = ' '
//     for(let s = 0; s < n - (i + 1); s++){
//         r = r + " "
//     }
//     for(let j = 0; j < i + 1; j++){
//         r = r + "*"
//     }
//     console.log(r)
// }


//6th 
//  1
//  10
//  101
//  1010
//  10101


// let n = 5
// for(let i = 0; i < n; i++){
//     let r = " "
//     let s = 1
//     for(let j =0; j <= i; j++){
//         r = r + s
//         if(s == 1){
//             s = 0
//         }
//         else{
//             s = 1
//         }

//     }
//     console.log(r)
// }


//7th
//  1
//  01
//  010
//  1010
//  10101

let n = 5
 let s = 1
for(let i = 0; i < n; i++){
    let r = " "
   
    for(let j =0; j <= i; j++){
        r = r + s
        if(s == 1){
            s = 0
        }
        else{
            s = 1
        }

    }
    console.log(r)
}