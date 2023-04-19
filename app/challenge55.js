function arrr() {
    let arr = [
        [1, 1, 1],
        [1, 0, 1]
    ]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(0)) {
            arr[i] = 0;
            return arr[i];
        }
        else if (arr[i].includes(1)) {
            arr[i] = 1;
            return arr[i]

        }

    }
}
arrr()

