function math() {
    let arr = [1, 2, 3, 4];
    let arr1 = [1, 2, 3, 4];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            let res = arr[i] * arr1[j];
            console.log(res)
        }
    }
}
math()