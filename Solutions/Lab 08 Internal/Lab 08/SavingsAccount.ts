/// <reference path="bankaccount.ts" />

module Accounts {
    export class SavingsBankAccount extends BankAccount {
        public withdraw(amount: number) {
            var result: number = this.balance -= amount;
            this.balance = result;
        }
    }
}