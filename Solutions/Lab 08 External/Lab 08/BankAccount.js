define(["require", "exports"], function (require, exports) {
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
    exports.BankAccount = BankAccount;
});
//# sourceMappingURL=BankAccount.js.map