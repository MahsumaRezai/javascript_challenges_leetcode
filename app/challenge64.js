let fun = function (...arr) {
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr.sort();
        console.log(arr2);
        for (let j = 0; j < arr.length; j++) {
            arr2.reduce((a, b) => {
                let arr3 = a + b;
                console.log(arr3)
            })
        }
    }




}
fun()