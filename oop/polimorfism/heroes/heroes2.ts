interface Hero {
    name: string;
    life: number;
    mana: number;

    firePrimary(anotherHero: Hero): void;
    fireSecondary(anotherHero: Hero): void;
    receiveHit(energy: number): void;
    isAlive(): boolean;
}

class BasicHero {
    life: number;
    constructor(life: number) {
        this.life = life;
    }
    isAlive(): boolean {
        if (this.life > 0) {
            return true;
        }
        else {
            return false;
        }
    };
}

class Superman extends BasicHero implements Hero {
    name: string;
    mana: number;

    constructor(name: string, life: number, mana: number) {
        super(life);
        this.name = name;
        this.mana = mana;
    }

    firePrimary(anotherHero: Hero): void {
        this.mana -= 5;
        anotherHero.receiveHit(150);
    }

    fireSecondary(anotherHero: Hero): void {
        this.mana -= 1;
        anotherHero.receiveHit(50);
    }
    receiveHit(energy: number): void {
        if (energy > 10) {
            this.life -= 0.1 * energy;
        }
    }
    
}

class Mage extends BasicHero implements Hero {
    name: string;
    mana: number;

    constructor(name: string, life: number, mana: number) {
        super(life);
        this.name = name;
        this.mana = mana;
    }

    firePrimary(anotherHero: Hero): void {
        this.mana -= 20;
        this.life += 2;
        anotherHero.receiveHit(150);
    }
    fireSecondary(anotherHero: Hero): void {
        this.mana -= 10;
        this.life += 1;
        anotherHero.receiveHit(50);
    }
    receiveHit(energy: number): void {
        this.life -= 10;
        this.mana += 0.5 * energy;
    }
}

class Marksman extends BasicHero implements Hero {
    name: string;
    mana: number;

    constructor(name: string, life: number, mana: number) {
        super(life);
        this.name = name;
        this.mana = mana;
    }

    firePrimary(anotherHero: Hero): void {
        this.mana -= 3;
        this.life += 5;
        if (this.life > 500) {
            this.life = 500;
        }
        anotherHero.receiveHit(100);
    }
    fireSecondary(anotherHero: Hero): void {
        this.mana -= 0;
        this.life += 5;
        if (this.life > 500) {
            this.life = 500;
        }
        anotherHero.receiveHit(70);
    }
    receiveHit(energy: number): void {
        this.life -= 10;
        this.mana += 5 * energy;
    }
}

var clark = new Superman("Clark Kent", 1000, 1000);
var xevras = new Mage("Xevras", 300, 100);
var ashe = new Marksman("Ashe", 500, 200);


clark.firePrimary(xevras);
xevras.firePrimary(clark);
xevras.fireSecondary(clark);
clark.fireSecondary(xevras);


console.log(clark);
console.log(xevras);
console.log(ashe);

console.log(clark.isAlive());
console.log(xevras.isAlive());
console.log(ashe.isAlive());