function arr() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < arr1.length; i++) {
        let arr2 = arr1.pop(i);
        let arr3 = arr1.push(arr2);
        console.log(arr3, i)
    }
}
arr();