function sum() {
    let arr = [12, 3, 4];
    let arr1 = arr.reduce((a, b) => {
        return a + b;
    })
    console.log(arr1)
}
sum();