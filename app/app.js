let seacrch = 1;
function sorarr(...arr) {
    let arr2 = arr.sort();
    if (arr2.includes(seacrch)) {
        let arr3 = arr2.reverse();
        console.log(arr3);
        return true;
    }
    else {
        return false;
    }

}
sorarr();
