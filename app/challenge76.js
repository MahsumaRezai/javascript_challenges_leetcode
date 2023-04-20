function str() {
    let s = "HelloWorld";
    for (let i = 0; i < s.length; i++) {
        if (s.toLocaleLowerCase()) {
            let s2 = s.split(" ");
            console.log(s2)
        }
    }
}
str()