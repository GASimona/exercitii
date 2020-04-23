interface Animal {
    name: string;
    speak(): void;
}

interface Pet {
    play(): void;
}

interface Robot {
    start(): void;
    stop(): void;
}

class RoboDog implements Animal, Pet, Robot {
    name: string;
    isStarted: true;
    constructor(name: string) {
        this.name = name;
        this.isStarted = true;
    }
    speak(): void {
        console.log('Scartz Scartz');
    }
    play(): void {
        console.log('Running to catch a stick');
    }
    start(): void {
        console.log('Robot started');
    }
    stop(): void {
        console.log('Robot stoped');
    }
}

let lessie = new RoboDog('Lessie');

lessie.speak();
lessie.play();
lessie.stop();