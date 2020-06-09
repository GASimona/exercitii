new Promise((resolve, reject) => {
        let calcul = 1 + 1;
        if ( calcul == 3) {
            resolve('Adevarat')
        } else {
            reject('Fals')
        }
    })
    .then (afiseazaRezultatul => {
        console.log(afiseazaRezultatul)
    })
    .catch (afiseazaRezultatul => {
        console.log(afiseazaRezultatul)
    })