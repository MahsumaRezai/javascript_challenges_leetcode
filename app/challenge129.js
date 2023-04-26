function num(w) {
    let pa = new RegExp("[0-9]{2,}");
    if (pa.test(w)) {
        return true;

    }
    else {
        return false;
    }


}
num();