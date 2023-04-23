function str() {
    let word1 = 'hello';
    let word2 = "bay";
    if (word1.length > word2.length) {
        let res = word1.length++;
        console.log(res)

    }
    else if (word1.length < word2.length) {
        let res1 = word2++;
        console.log(res1)
    }
}
str();
