function arr() {
    let arr1 = [[1, 2, 3, 4], [5, 6, , 7, 8]];
    for (let i = 0; i < arr1.length; i++) {
        let res = arr1.join();
        console.log(res)
    }
}
arr();
