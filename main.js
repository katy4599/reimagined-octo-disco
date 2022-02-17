import input from 'input'

class ItemNotFound extends Error {
}

class NoFunds extends Error {
}

class VendingMachine {
    constructor() {
        this.items = new Map();
        this.items.set('Snickers', 1.00);
        this.items.set('Sprite', 2.00);
        this.items.set('Sock', 5.00);
        this.items.set('Dog', 20.00);
    }
    buy(budget, item) {
        const price = this.items.get(item);
        if (price == undefined) {
            throw new ItemNotFound('The vending machine does not have that item.');
        } if (price <= budget) {
            budget -= price;

            console.log(`You purchased a ${item}.`);
        } else {
            throw new NoFunds('Not enough money in the budget!');
        }
    }
}

class App {
    static async main() {
        const machine = new VendingMachine();
        const budget = await input.text('How much money is in your account?');
        const item = await input.text('What would you like to buy?');
        
        try {
            machine.buy(budget, item);           
        } catch (error) {
            if (error instanceof ItemNotFound) {
                console.log('The vending machine does not have that item.');
            } else if (error instanceof NoFunds) {
                console.log('You do not have enough money!');
            }
        }
        
    }
}

App.main();