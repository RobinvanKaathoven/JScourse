/// <reference path="bankaccount.ts" />
/// <reference path="savingsaccount.ts" />

module Bank {
    export interface AccountFinder {
        (accountL: Accounts.BankAccount): boolean;
    }

    export class Bank {
        private _numberGen: number = 0;
        private _accounts: Accounts.BankAccount[] = [];

        public createAccount(initialBalance: number, savings: boolean): Accounts.BankAccount {
            var account: Accounts.BankAccount = savings ? new Accounts.SavingsBankAccount((++this._numberGen).toString(), initialBalance || 0) : new Accounts.BankAccount((++this._numberGen).toString(), initialBalance || 0);
            this._accounts.push(account);
            return account;
        }

        public findAccount(finder: AccountFinder): Accounts.BankAccount {
            for (var index in this._accounts) {
                if (finder(this._accounts[index])) {
                    return this._accounts[index];
                }
            }
            return null;
        }

        public transferMoney(from: AccountFinder, to: Bank.AccountFinder, amount: number): Accounts.BankAccount {
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
}