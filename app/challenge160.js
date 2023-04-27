function name() {
    let obj = {
        name: "Masoumeh",
        last: "Rezai"

    }
    let obj1 = {
        ...obj,
        emali: "Mahsuam @gmail.com"
    }
    function name2() {
        console.log(obj1);

    }
    name2()
}
name();
