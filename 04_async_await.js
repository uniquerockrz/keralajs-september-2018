async function add(a, b) {
    return a + b;
}

async function wait(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('done waiting'); 
        }, 2000);
    });
}

async function run(){
    let result = await add(2, 2);
    console.log(result);
    await wait();
}

run();