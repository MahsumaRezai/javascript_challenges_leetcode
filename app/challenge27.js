// 27
function name(...arr) {
    let arr2 = arr.reduce((c, n) => {
        if (n > c) return n;
        return c;
    })
    console.log(arr2)

}
name(1, 2, 3, 4, 5)
