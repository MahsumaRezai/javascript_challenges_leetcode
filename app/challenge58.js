function* gen() {
    yield 1;
    yield 2;
    yield "Hello Masoumeh form the javascript challenges";
}
for (x of gen) {
    let res = gen[x];
    console.log(res)
}

