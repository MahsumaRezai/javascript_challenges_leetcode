function ar() {
    let arr = [1, 2, 3, 4];
    for (let i = 1; i < arr.length; i++) {
        let arr2 = arr.reduce((a, b) => {
            return a + b
        })
        console.log(arr2)


    }
}
ar()