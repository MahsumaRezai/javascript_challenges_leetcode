function arr() {
    let arr1 = [1, 2, 3, 4];
    let res = arr1[0];
    for (let i = 0; i < arr1.length; i++) {
        if (res > arr1[i]) {
            console.log(res)
        }
    }
}
arr();