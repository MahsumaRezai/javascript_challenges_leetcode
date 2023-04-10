// 2
// 3

// 
function arrlist() {
    let arr = [1, 2, 3, 4, 5, 9].reduce((a, b) => {
        return a + b;
    })
    if (arr % 2 == 1) {
        return false;
    }
    else if (arr % 2 == 0) {
        return true;
    }
    console.log(arr)

}

arrlist();


