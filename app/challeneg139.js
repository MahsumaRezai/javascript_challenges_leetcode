function s() {
    let str = [["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"]]
    for (let i = 0; i < str.length; i++) {
        let res = str.concat();
        let res1 = res.join("");
        console.log(res1)

    }
}
s();