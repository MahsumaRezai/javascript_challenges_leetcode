// 11

function det() {
    let arr = [
        [1, 2],
        [1, 2, 3, 4],
        [4, 5, 6, 7],
    ]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            let arr2 = arr[j] + arr[j];
            console.log(arr2)
        }
    }

}
det()