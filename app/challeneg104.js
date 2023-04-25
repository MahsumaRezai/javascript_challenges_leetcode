let fun = function () {
    let day = 7;
    let arr = [1, 2, 3, 4, 5].reduce((a, b) => {
        if (a + b >= day) {
            return a - b;
        }
        else if (a + b < 7) {
            return a + b;

        }

    })
    console.log(arr)

}
fun();