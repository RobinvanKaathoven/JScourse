var Bank = (function () {
    function Bank() {
        this._lastNr = 0;
        this._accounts = [];
    }
    Bank.prototype.addAccount = function (initialBalance, savings) {
        var account;
        if (savings) {
            account = new SavingsAccount(++this._lastNr, initialBalance);
        }
        else {
            account = new BankAccount(++this._lastNr, initialBalance);
        }
        this._accounts.push(account);
    };

    Bank.prototype.findAccount = function (accountNr) {
        return this._accounts.filter(function (account) { return account.getAccountNr() === accountNr; })[0];
    };

    Bank.prototype.removeAccount = function (accountNr) {
        var indexToRemove = this._accounts.indexOf(this.findAccount(accountNr));
        this._accounts.splice(indexToRemove, 1);
    };

    Bank.prototype.transferMoney = function (fromNr, toNr, amount) {
        var from = this.findAccount(fromNr);
        var to = this.findAccount(toNr);
        from.withdraw(amount);
        to.deposit(amount);
    };
    return Bank;
})();