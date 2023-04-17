function oder() {
    let arr = [1, 2, 3];
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr.sort();
        let arr3 = arr2.reverse();
        console.log(arr3);
        for (let j = 0; j < arr.length; j++) {
            let arr4 = arr3.reverse();
            console.log(arr4)

        }
    }
}
oder()
