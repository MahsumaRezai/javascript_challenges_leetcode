function arr(...ar) {
    for (let i = 0; i < ar.length; i++) {
        ar.reduce((a, b) => {
            if (b > a) {
                console.log("this time is best time to buy")
                return b;
            }
            else if (b < a) {
                console.log("I donot have money");
                return a;
            }
        })
    }
}
arr()