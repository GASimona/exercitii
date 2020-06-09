new Promise((resolve, reject) => {
        let calcul = 1 + 1;
        if ( calcul == 3) {
            resolve('Adevarat')
        } else {
            reject('Fals')
        }
    })
    //dupa ce promisiunea se indeplineste intra pe then si executa ce este in el
    // pe then vine raspunsul
    .then (afiseazaRezultatul => {
        console.log(afiseazaRezultatul)
    })
    .catch (afiseazaRezultatul => {
        console.log(afiseazaRezultatul)
    })