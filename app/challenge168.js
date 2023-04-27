function root() {
    let arr = [1, 2, 3, 4, 5];
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr.join(null);
        let arr3 = arr2.split("_ ")
        console.log(arr3)
    }

}
root()