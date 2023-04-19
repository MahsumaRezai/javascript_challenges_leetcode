function path(data) {
    let check = new RegExp("^[A-Z][0-9]");
    if (check.exec(data)) {
        return true;

    }
    else if (check.exec(data)) {
        return false
    }

}
path()