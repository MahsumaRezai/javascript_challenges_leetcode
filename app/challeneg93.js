function str() {
    let s1 = ["Hi"];
    for (let i = 0; i < s1.length; i++) {
        let s2 = s1.sort();
        if (s2 == s1) {
            return true;
        }
        else if (s2 != s1) {
            return false
        }


    }
}
str()