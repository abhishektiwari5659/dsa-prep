function removeElement(a, v){
    let pos = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] != v){
            a[pos] = a[i];
            pos = pos + 1;
        }
    }
    return pos;
}

let a = [1, 2, 2, 2, 3, 4, 5, 6]
console.log(removeElement(a, 2))