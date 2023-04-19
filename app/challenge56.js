let fun = function () {
    let arr = [
        [1, 2, 3],
        [12, 1, 5]

    ]
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].lastIndexOf(i);
        let arr3 = arr[i].indexOf(i);
        if (arr2 >= arr3) {
            return arr2;
        }
        else if (arr2 < arr3) {
            arr += 3;
            return arr3

        }
    }


}
fun()