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
n = 5
for(let i = 1; i <= n; i++){
    let r = ' '
    for(let j = 0; j <= n - i ; j++){
        r = r + ("*" + " ")
    }
    console.log(r)
}