function word(w) {
    let par = new RegExp("[A-Z]{3,30}");
    if (par.test(w)) {
        let res = "Hello form the js code";
        console.log(res)

    }
    else if (par.test(w)) {
        let res1 = "Bay Bay form the js code";
        console.log(res1)

    }

}
word()