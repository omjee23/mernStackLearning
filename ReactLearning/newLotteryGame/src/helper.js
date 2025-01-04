function generateRandom(n){
    let arr = new Array(n);
    for(let i=0; i<n; i++){
        arr[i] = Math.floor(Math.random() * 10)
    }
    return arr;
}

function sum(arr){
    let num = arr.reduce((i, j) => i + j, 0);
    return num;
}
export { generateRandom , sum}