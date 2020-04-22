try {
    // console.logg('This should not happen!'); 
    // throw 'I throw this error'; merge dar nu se foloseste
    // throw ['I throw this error']; merge dar nu se foloseste

    // ------- asta este de folosit cu clasa----------------------
    throw new Error('I throw this error');

} catch (error) {
    console.log('Tyle: ' + error.name);
    console.log('Error message: ' + error.messange);
    // console.log('There was an error: ' + error);
}

console.log('Do we see this message');