// 4
function vaild(s) {

    if (s.includes("()")) {
        return true;

    }
    else if (s.includes("{}")) {
        return true;
    }
    else if (s.includes("[]")) {
        return true;
    }
    else if (s.includes(("(}"))) {
        return false;

    }
    else if (s.includes(("{]"))) {
        return false;

    }
    else {
        return false;
    }

}
vaild();






