function arr() {
    let arr1 = [1, 2, 3, 4, 5, 6, 7];
    for (let i = 0; i < arr1.length; i++) {
        let arr2 = arr1.reduce((a, b) => {
            if (b > a) {
                return b;
            }
            else if (b < a) {
                return a;
            }
        })
        console.log(arr2)
    }


}
arr();

