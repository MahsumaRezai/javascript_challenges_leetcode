let arr = [1, 2, 3, 4, 5];
arr.reduce((c, n) => {
    if (n > c) {
        return n;
    }
    else if (n < c) {
        return c;
    }
    console.log(arr)
})