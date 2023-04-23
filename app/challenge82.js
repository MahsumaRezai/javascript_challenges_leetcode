function viald() {
    let p = new RegExp("^[A-Z]");
    let s = "*absb";
    if (p.exec(s)) {
        return true
    }
    else {
        return false
    }

}
viald()