class Hero {
    constructor(name, life, mana) {
        this.name = name;
        this.life = life;
        this.mana = mana;
    }
    firePrimary(anotherHero) { }
    fireSecondary(anotherHero) { }
    receiveHit(energy) { }
    isAlive() {
        return this.life > 0;
    }
}
// se exporta tot ce e in fisier
// export { default }

// se exporta doar class Hero
export { Hero }