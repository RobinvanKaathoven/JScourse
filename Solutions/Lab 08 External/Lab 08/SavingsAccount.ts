import Account = require('BankAccount')

export class SavingsBankAccount extends Account.BankAccount {
    public withdraw(amount: number) {
        var result: number = this.balance -= amount;
        this.balance = result;
    }
}