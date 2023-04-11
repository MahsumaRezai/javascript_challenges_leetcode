function fun1() {
    let obj = {
        name: "Masoumeh",
        lastname: "Rezai",
        fun: function () {
            console.log("Hello Masoumeh form the javascript code");
        }
    }
    let obj2 = {
        ...obj,
        age: 21,
        add: "heart",
    }
    console.log(obj2)

}
fun1();
