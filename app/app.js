function check() {
    let word = "ABC"
    let arr = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[0].concat(arr[1], arr[2]);
        let arr3 = arr2.join("")
        console.log(arr3);
        if (word.includes(arr3)) {
            return true
        }
        else if (word.includes(!arr3)) {
            return false;
        }
    }
}
check()