class Hero {
    // in constructor definim proprietatile
    constructor(name, life, mana) {
        // initializare proprietati
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    // metode
    firePrimary() { }
    fireSecondary() { }
    receiveHit() { }
    isAlive() {
        return this.life > 0;
    }
}

class Superman extends Hero {
    firePrimary() {
        this.mana -= 5;
    }
    fireSecondary() {
        this.mana -= 1;
    }
    receiveHit() {
        this.life -= 0.5;
    }
}

class Mage extends Hero {
    firePrimary() {
        this.mana -= 20;
        this.life += 2;
    }
    fireSecondary() {
        this.mana -= 10;
        this.life += 1;
    }
    receiveHit() {
        this.life -= 10;
    }
}

var clark = new Superman("Clark Kent", 1000, 1000);
var xevras = new Mage("Xevras", 100, 300);


clark.firePrimary();
xevras.receiveHit();
xevras.firePrimary();
clark.receiveHit();
xevras.fireSecondary();
clark.receiveHit();
clark.fireSecondary();
xevras.receiveHit();


console.log(clark);
console.log(xevras);

console.log(clark.isAlive());
console.log(xevras.isAlive());
