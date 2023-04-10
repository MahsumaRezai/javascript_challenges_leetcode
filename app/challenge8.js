// 8
function nodel(s) {
    let arr = [1, 2, 3, 4];
    for (let i = 0; i < arr.length; i++) {
        if (s == arr) {
            return true;
        }
        else if (s != arr) {
            return false;
        }
    }
}
nodel();