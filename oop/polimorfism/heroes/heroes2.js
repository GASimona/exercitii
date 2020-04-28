var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BasicHero = /** @class */ (function () {
    function BasicHero(life) {
        this.life = life;
    }
    BasicHero.prototype.isAlive = function () {
        if (this.life > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    ;
    return BasicHero;
}());
var Superman = /** @class */ (function (_super) {
    __extends(Superman, _super);
    function Superman(name, life, mana) {
        var _this = _super.call(this, life) || this;
        _this.name = name;
        _this.mana = mana;
        return _this;
    }
    Superman.prototype.firePrimary = function (anotherHero) {
        this.mana -= 5;
        anotherHero.receiveHit(150);
    };
    Superman.prototype.fireSecondary = function (anotherHero) {
        this.mana -= 1;
        anotherHero.receiveHit(50);
    };
    Superman.prototype.receiveHit = function (energy) {
        if (energy > 10) {
            this.life -= 0.1 * energy;
        }
    };
    return Superman;
}(BasicHero));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage(name, life, mana) {
        var _this = _super.call(this, life) || this;
        _this.name = name;
        _this.mana = mana;
        return _this;
    }
    Mage.prototype.firePrimary = function (anotherHero) {
        this.mana -= 20;
        this.life += 2;
        anotherHero.receiveHit(150);
    };
    Mage.prototype.fireSecondary = function (anotherHero) {
        this.mana -= 10;
        this.life += 1;
        anotherHero.receiveHit(50);
    };
    Mage.prototype.receiveHit = function (energy) {
        this.life -= 10;
        this.mana += 0.5 * energy;
    };
    return Mage;
}(BasicHero));
var Marksman = /** @class */ (function (_super) {
    __extends(Marksman, _super);
    function Marksman(name, life, mana) {
        var _this = _super.call(this, life) || this;
        _this.name = name;
        _this.mana = mana;
        return _this;
    }
    Marksman.prototype.firePrimary = function (anotherHero) {
        this.mana -= 3;
        this.life += 5;
        if (this.life > 500) {
            this.life = 500;
        }
        anotherHero.receiveHit(100);
    };
    Marksman.prototype.fireSecondary = function (anotherHero) {
        this.mana -= 0;
        this.life += 5;
        if (this.life > 500) {
            this.life = 500;
        }
        anotherHero.receiveHit(70);
    };
    Marksman.prototype.receiveHit = function (energy) {
        this.life -= 10;
        this.mana += 5 * energy;
    };
    return Marksman;
}(BasicHero));
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
