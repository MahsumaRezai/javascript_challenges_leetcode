function stack() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        let arr1 = arr.pop();
        let arr2 = arr.push(arr1);
        console.log(arr2);
        console.log(arr)
    }


}
stack();