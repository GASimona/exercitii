class ReversibleString extends String {
    reverse() {
        return this.split('')
                   .reverse()
                   .join('');
    }
}

var myName = new ReversibleString("Radu");

myName.reverse();

console.log(myName.reverse());
console.log(myName.reverse().toUpperCase());
console.log(myName.toLocaleUpperCase());