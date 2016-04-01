import BankAccount = require('BankAccount')
import SavingsAccount = require('SavingsAccount')

export interface AccountFinder {
    (accountL: BankAccount.BankAccount): boolean;
}

export class Bank {
    private _numberGen: number = 0;
    private _accounts: BankAccount.BankAccount[] = [];

    public createAccount(initialBalance: number, savings: boolean): BankAccount.BankAccount {
        var account: BankAccount.BankAccount = savings ? new SavingsAccount.SavingsBankAccount((++this._numberGen).toString(), initialBalance || 0) : new BankAccount.BankAccount((++this._numberGen).toString(), initialBalance || 0);
        this._accounts.push(account);
        return account;
    }

    public findAccount(finder: AccountFinder): BankAccount.BankAccount {
        for (var index in this._accounts) {
            if (finder(this._accounts[index])) {
                return this._accounts[index];
            }
        }
        return null;
    }

    public transferMoney(from: AccountFinder, to: AccountFinder, amount: number): BankAccount.BankAccount {
        var fromAc = this.findAccount(from);
        var toAc = this.findAccount(to);

        fromAc.withdraw(amount);
        toAc.deposit(amount);
        return null;
    }

    public removeAccount(finder: AccountFinder): void {
        var toDelete = this.findAccount(finder);
        this._accounts.splice(this._accounts.indexOf(toDelete), 1);
    }
}