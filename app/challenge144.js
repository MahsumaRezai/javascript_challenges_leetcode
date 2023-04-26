function sum() {
    let arr = [12, 3, 4];
    let arr1 = arr.reduce((a, b) => {
        if (b > a) {
            return b;
        }
        else if (b < a) {
            return a;
        }
    })
    console.log(arr1)
}
sum();