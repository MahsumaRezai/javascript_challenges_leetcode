// 2 
var romanToInt = function () {
    let obj = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000,
    }
    for (x in obj) {
        let res = obj[x];
        console.log(res);

    }

};
romanToInt()
