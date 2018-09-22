function callmemaybe(){
    console.log('called me!');
}

console.log('start');

setTimeout(callmemaybe, 3000);

console.log('end');