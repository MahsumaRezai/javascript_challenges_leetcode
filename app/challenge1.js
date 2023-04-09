// find sum of number in array list.

let fun = function () {
    let arr = [1, 2, 3, 4, 5].reduce((a, b) => {
        return a + b;
    })
    console.log(arr)

}
fun();