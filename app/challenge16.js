// 16 
function arr(...ar) {
    let a = [1, 2, 3, 4, 5];
    let b = a.concat(...ar);
    console.log(b);

}
arr(4, 5, 6, 6, 8, 9, 10);