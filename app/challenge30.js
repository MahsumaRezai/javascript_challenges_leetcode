// 30 
function addlist() {
    let arr = [1, 2, 3, 4];
    let arr2 = [5, 6, 7, 8];
    let arr3 = arr.concat(arr2);
    console.log(arr3)
    arr3.reduce((a, b) => {
        let arr4 = b + a;
        console.log(arr4)

    })


}
addlist()

