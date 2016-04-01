module Accounts {
    export class BankAccount {
        constructor(private accountNr: string, protected balance: number) {
        }

        public getAccountNr(): string {
            return this.accountNr;
        }

        public getBalance(): number {
            return this.balance;
        }

        public withdraw(amount: number) {
            var result: number = this.balance - amount;
            if (result < 0) {
                throw { message: "amount may not drop below zero" };
            }
            else {
                this.balance = result;
            }
        }

        public deposit(amount: number) {
            this.balance += amount;
        }
    }
}