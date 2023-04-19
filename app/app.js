function attrote() {
    let arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr.reverse();
        console.log(arr2);
        let arr3 = arr2.reverse();
        console.log(arr3);
        let arr4 = arr3.reverse();
        console.log(arr4);
        console.log(arr.length)
    }
}
attrote()