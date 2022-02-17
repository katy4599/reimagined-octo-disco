class ItemNotFound extends Error {
}

class NoFunds extends Error {
}

class BankAccount {
    constructor(starting) {
        this.balance = starting;
    }
}
class VendingMachine {
    constructor() {
        this.items = new Map();
        this.items.set('Snickers', 1.00);
        this.items.set('Sprite', 2.00);
        this.items.set('Sock', 5.00);
        this.items.set('Dog', 20.00);
    }
    buy(account, item) {
        const price = this.items.get(item);
        if (price == undefined) {
            throw new ItemNotFound('The vending machine does not have that item.');
        } if (price <= account.balance) {
            account.balance -= price;

            console.log(`You purchased a ${item}.`);
        } else {
            throw new NoFunds('Not enough money!');
        }
    }
}

class App {
    static main() {
        const account = new BankAccount(15);
        const machine = new VendingMachine();

        try {
            machine.buy(account, 'Lipstick');           
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