function arr() {

    let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arr1.length; i++) {
        let arr2 = arr1.slice(0, 9);
        console.log(arr2, i);
        let arr3 = arr2.unshift("Hello form the js code");
        console.log(arr3, i);
        let arr4 = arr3.push("good by js code");
        console.log(arr4, i)

    }


}
arr()