function arr() {
    let arr1 = [
        [1, 2, 3],
        [1, 3, 2]
    ]
    let arr2 = arr1[0].concat(arr1[1]);
    let arr3 = arr2.slice(0, 2);
    console.log(arr3)

}
arr()