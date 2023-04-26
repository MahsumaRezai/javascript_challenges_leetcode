function arr() {
    let arr1 = [1, 2, 3, 4, 5, 6];
    for (let i = 0; i < arr1.length; i++) {
        let res = arr1.slice(0, 2);
        let res1 = res.push(34);
        console.log(res1)
    }
}
arr();
