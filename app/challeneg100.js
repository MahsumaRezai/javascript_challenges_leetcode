function str() {
    let s = "Hello";
    let s1 = "Masoumeh";
    let res = s.concat(s1);
    let arr = [];
    let arr1 = arr.push(res);
    console.log(arr1)
}
str()
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr.reduce((a, n) => {
        if (n > a) {
            let arr2 = arr[0];
            console.log(arr2);
            return true

        }
        else if (n < a) {
            let arr3 = arr[1];
            console.log(arr3);
            return false;


        }

    })
} arr();