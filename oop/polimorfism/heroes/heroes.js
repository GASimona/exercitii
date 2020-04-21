class Hero {
    // in constructor definim proprietatile
    constructor(name, life, mana) {
        // initializare proprietati
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    // metode
    firePrimary(anotherHero) { }
    fireSecondary(anotherHero) { }
    receiveHit(energy) { }
    isAlive() {
        return this.life > 0;
    }
}

class Superman extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 5;
        anotherHero.receiveHit(30);
    }
    fireSecondary(anotherHero) {
        this.mana -= 1;
        anotherHero.receiveHit(5);
    }
    receiveHit(energy) {
        if (energy > 10) {
            this.life -= 0.1 * energy;
        }
    }
}

class Mage extends Hero {
    firePrimary(anotherHero) {
        this.mana -= 20;
        this.life += 2;
        anotherHero.receiveHit(15);
    }
    fireSecondary(anotherHero) {
        this.mana -= 10;
        this.life += 1;
        anotherHero.receiveHit(5);
    }
    receiveHit(energy) {
        this.life -= 10;
        this.mana += 0.5 * energy;
    }
}

// class Marksman extends Hero {
//     firePrimary() {
//         this.mana -= 3;
//         this.life += 5;
//         if (this.life > 500) {
//             this.life = 500;
//         }
//     }
//     fireSecondary() {
//         this.mana -= 0;
//         this.life += 5;
//         if (this.life > 500) {
//             this.life = 500;
//         }
//     }
//     receiveHit() {
//         this.life -= 10;
//     }
// }

var clark = new Superman("Clark Kent", 1000, 1000);
var xevras = new Mage("Xevras", 100, 300);
// var ashe = new Marksman("Ashe", 500, 200);


clark.firePrimary(xevras);
xevras.firePrimary(clark);
xevras.fireSecondary(clark);
clark.fireSecondary(xevras);


console.log(clark);
console.log(xevras);
// console.log(ashe);

console.log(clark.isAlive());
console.log(xevras.isAlive());
// console.log(ashe.isAlive());
