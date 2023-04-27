function arr() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr.shift();
        let arr3 = arr.push(arr1);
        console.log(arr3, arr)
    }
}
arr();
