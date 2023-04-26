function nums() {
    let arr = [1, 2, 3, 4];
    let arr2 = arr.reduce((a, b) => {
        if (b > a) {
            let res = arr[0] + arr[1];
            console.log(res)

        }
        else if (b < a) {
            let res1 = arr[0] - arr[1];
            console.log(res1)
        }
        console.log(arr2)
    })
}
nums()