
//23 

let arr = [1, 2, 3, 4, 5, 12];
let arr2 = arr.reduce((a, b) => {
    if (b > a) return ++b;
    return ++a;

})
console.log(arr2);









