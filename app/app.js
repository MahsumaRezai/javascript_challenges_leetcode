function jumparr(n, m) {
    if (n > m) {
        for (let i = 0; i < m; i++) {
            n++;
            return n;

        }

    }
    else if (n < m) {
        for (let j = 0; j < m; j++) {
            n--;
            return m;
        }
    }

}
jumparr()