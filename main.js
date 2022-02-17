class Pet {
    constructor(species) {
        this.species = species;
    }

    describe() {
        console.log(`This pest is a ${this.species}.`);

    }
}

class Dog extends Pet {
    constructor(owner, breed, age) {
        super('dog');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
    }

    bark() {
        console.log('This dog barks constantly!');
    }
    
    describe() {
        console.log(
            `This dog is a ${this.age} `
            + `year old ${this.breed}, owned by ${this.owner}.`
        );
    }
}

class Cat extends Pet {
    constructor(owner, breed, age) {
        super('cat');
        this.owner = owner;
        this.breed = breed;
        this.age = age;
    }

    meow() {
        console.log('This cat meows constantly!');
    }

    describe() {
        console.log(
            `This cat is a ${this.age} `
            + `year old ${this.breed}, owned by ${this.owner}.`
        );
    }
}

class App {
    static main() {
        const myPet = new Pet('dog');
        const myCat = new Cat('Gunner', 'psycho', 2);
        const myDog = new Dog('Katy', 'mutt', 4)
        myDog.describe();
        myDog.bark();
        myCat.describe();
        myCat.meow();
    }
}
App.main();