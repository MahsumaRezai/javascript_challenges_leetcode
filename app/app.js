function small() {
    let arr = [2, 3, 4, 1];
    let arr2 = arr.reduce((a, b) => {
        if (b < a) {
            return b;
        }
        else if (b > a) {
            return a;
        }
        console.log(arr2)
    })
}
small();