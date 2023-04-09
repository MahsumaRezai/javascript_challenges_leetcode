// 3 find large string in arrar list 
function str() {
    let names = ["Masoumeh", "Reza", "sara", "shair"];
    for (let i = 0; i < names.length; i++) {
        let findname = names.reduce((a, b) => {
            if (a > b) {
                return a;

            }
            else if (a < b) {
                return b;
            }

        })
        console.log(findname);


    }

}

str();