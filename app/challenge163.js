function arr() {
    let arr = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr.slice(0, 3);
        let arr2 = arr1.concat(arr);
        console.log(arr1);
        console.log(arr2)
    }
}
arr();