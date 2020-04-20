class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, height, course) {
        // super.constructor(name, age, height);
        //sunt identice sus = jos
        //----apelam conrtuctorul parntelui--------
        super(name, age, height);
        //------adaugam proprietatile parintelui------
        this.course = course;
    }
    //-----suprascrierea metodelor----------
    sayHello() {
        console.log(`Hello my name is ${this.name} and I like ${this.course}`);
    }
}
// "super" reprezinta parintele
class Teacher extends Person {
    constructor(name, age, height, specialty) {
        super(name, age, height);
        this.specialty = specialty;
    }
    sayHello() {
        // aplelam metoda "sayHello" din parinte
        super.sayHello();
        console.log(`I'm a teacher and I teach ${this.specialty}`);
    }
}

var radu = new Person("Radu", 33, 170);
var andrea = new Student("Andrea", 26, 168, "Java Script");
var ion = new Teacher("Ion", 40, 182, "Vue.JS");

radu.sayHello();
andrea.sayHello();
ion.sayHello();