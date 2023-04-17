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