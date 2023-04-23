function queen(q, n) {
    if (q % 2 == 1) {
        let mass = "you arenot queen";
        console.log(mass);
    }
    else if (q % 2 == 0) {
        q = n;
        let mass1 = "Okay sure I am queen";
        console.log(mass1);
        console.log(n)
    }

}
queen()