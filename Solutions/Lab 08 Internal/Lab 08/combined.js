var Accounts;
(function (Accounts) {
    var BankAccount = (function () {
        function BankAccount(accountNr, balance) {
            this.accountNr = accountNr;
            this.balance = balance;
        }
        BankAccount.prototype.getAccountNr = function () {
            return this.accountNr;
        };
        BankAccount.prototype.getBalance = function () {
            return this.balance;
        };
        BankAccount.prototype.withdraw = function (amount) {
            var result = this.balance - amount;
            if (result < 0) {
                throw { message: "amount may not drop below zero" };
            }
            else {
                this.balance = result;
            }
        };
        BankAccount.prototype.deposit = function (amount) {
            this.balance += amount;
        };
        return BankAccount;
    })();
    Accounts.BankAccount = BankAccount;
})(Accounts || (Accounts = {}));
/// <reference path="bankaccount.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Accounts;
(function (Accounts) {
    var SavingsBankAccount = (function (_super) {
        __extends(SavingsBankAccount, _super);
        function SavingsBankAccount() {
            _super.apply(this, arguments);
        }
        SavingsBankAccount.prototype.withdraw = function (amount) {
            var result = this.balance -= amount;
            this.balance = result;
        };
        return SavingsBankAccount;
    })(Accounts.BankAccount);
    Accounts.SavingsBankAccount = SavingsBankAccount;
})(Accounts || (Accounts = {}));
/// <reference path="bankaccount.ts" />
/// <reference path="savingsaccount.ts" />
var Bank;
(function (Bank_1) {
    var Bank = (function () {
        function Bank() {
            this._numberGen = 0;
            this._accounts = [];
        }
        Bank.prototype.createAccount = function (initialBalance, savings) {
            var account = savings ? new Accounts.SavingsBankAccount((++this._numberGen).toString(), initialBalance || 0) : new Accounts.BankAccount((++this._numberGen).toString(), initialBalance || 0);
            this._accounts.push(account);
            return account;
        };
        Bank.prototype.findAccount = function (finder) {
            for (var index in this._accounts) {
                if (finder(this._accounts[index])) {
                    return this._accounts[index];
                }
            }
            return null;
        };
        Bank.prototype.transferMoney = function (from, to, amount) {
            var fromAc = this.findAccount(from);
            var toAc = this.findAccount(to);
            fromAc.withdraw(amount);
            toAc.deposit(amount);
            return null;
        };
        Bank.prototype.removeAccount = function (finder) {
            var toDelete = this.findAccount(finder);
            this._accounts.splice(this._accounts.indexOf(toDelete), 1);
        };
        return Bank;
    })();
    Bank_1.Bank = Bank;
})(Bank || (Bank = {}));
/// <reference path="bank.ts" />
var bank = new Bank.Bank;
bank.createAccount(50, false); // nr 1
bank.createAccount(100, true); // nr 2
try {
    bank.transferMoney(function (x) { return x.getAccountNr() === "1"; }, function (x) { return x.getAccountNr() === "2"; }, 100); // should error
}
catch (e) {
    console.log(e.message);
}
bank.transferMoney(function (x) { return x.getAccountNr() === "2"; }, function (x) { return x.getAccountNr() === "1"; }, 150);
console.log(bank.findAccount(function (x) { return x.getAccountNr() === "2"; }).getBalance()); // should be -50
console.log(bank.findAccount(function (x) { return x.getAccountNr() === "1"; }).getBalance()); // should be 250
//# sourceMappingURL=combined.js.map