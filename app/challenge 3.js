let prime = new Promise(function (resolve, reject) {
    let text = "Hello";
    if (text.length >= 10) {
        alert("your text is ture");
        return resolve;
    }
    else if (text.length <= 10) {
        alert("your text is not ture");
        return reject;
    }

})