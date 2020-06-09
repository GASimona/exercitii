function famaitarziucupromise(nrMSdeAst) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        },
        nrMSdeAst)
    })
}

console.log('xxx1')
famaitarziucupromise(1000)
    .then(() => {
        console.log('xxx2');
        return famaitarziucupromise(1000);
    })
    .then(() => {
        console.log('xxx3');
        return famaitarziucupromise(1000);
    })
    .then(() => {
        console.log('xxx4')
    })
console.log('xxx5')




console.log('xxx6');

setTimeout(() => {
    console.log('xxx7');
    setTimeout(() => {
        console.log('xxx8');
        setTimeout(() => {
            console.log('xxx9')
        },1000);
    },1000);
}, 1000)

console.log('xxx10')

