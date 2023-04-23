function arr() {
    let arr1 = [[1, 2, 3], [4, 5, 6]];
    for (let i = 0; i < arr1.length; i++) {
        let arr2 = arr1.join();
        console.log(arr2)
    }
}
arr()