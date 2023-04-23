function arr() {
    let arr1 = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    let arr3 = arr1.concat(arr2);
    let arr4 = arr3.sort();
    let arr5 = arr4.reduce((a, b) => {
        return a + b;
    })
    let arr6 = arr5 / arr5;
    console.log(arr4);
    console.log(arr5);
    console.log(arr6)

}
arr()