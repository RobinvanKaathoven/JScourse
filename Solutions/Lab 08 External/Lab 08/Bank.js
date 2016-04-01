define(["require", "exports", 'BankAccount', 'SavingsAccount'], function (require, exports, BankAccount, SavingsAccount) {
    var Bank = (function () {
        function Bank() {
            this._numberGen = 0;
            this._accounts = [];
        }
        Bank.prototype.createAccount = function (initialBalance, savings) {
            var account = savings ? new SavingsAccount.SavingsBankAccount((++this._numberGen).toString(), initialBalance || 0) : new BankAccount.BankAccount((++this._numberGen).toString(), initialBalance || 0);
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
    exports.Bank = Bank;
});
//# sourceMappingURL=Bank.js.map