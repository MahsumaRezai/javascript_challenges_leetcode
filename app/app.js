let arr = [1, 2, 3, 4, -1, -2, -3, -4];
arr.reduce((a, b) => {
    if (b > a) {
        return b;

    }
    else if (b < a) {
        return a;

    }
    console.log(arr)

})


