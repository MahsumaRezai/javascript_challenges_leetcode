function root() {
    let arr = [1, 2, 3, , 4, 5];
    let arr2 = [[]];
    for (let i = 0; i < arr.length; i++) {
        let arr3 = arr2.push(arr);
        console.log(arr3)
    }
}
root()