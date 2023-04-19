let arr = [[1, 2, 3],
[4, 2, 1],
[2, 1, 5],
]
for (let i = 0; i < arr.length; i++) {
    arr.reduce((a, b) => {
        if (b > a) {
            let arr2 = b + a;
            console.log(arr2)

        }
        else if (b < a) {
            return a;

        }
    })
}