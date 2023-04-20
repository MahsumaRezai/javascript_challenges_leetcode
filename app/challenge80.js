function log() {
    let arr = [100, 200, 300, 400];
    arr.reduce((a, b) => {
        if (b > a) {
            return b;
        }
        else if (b < a) {
            return a;
        }
        console.log(arr)
    })
}
log()