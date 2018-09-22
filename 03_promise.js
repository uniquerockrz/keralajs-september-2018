function add() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let res = 2 + 2;
            resolve(res);
        }, 3000);
    })
}

add().then((result) => {
    console.log('the result is ' + result);
});