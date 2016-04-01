var BankAccount = (function () {
    function BankAccount(accountNumber, initialBalance) {
        this._accountNr = accountNumber;
        if (!initialBalance) {
            this._balance = 0;
        }
        else {
            this._balance = initialBalance;
        }
    }
    BankAccount.prototype.getBalance = function () {
        return this._balance;
    };
    BankAccount.prototype.getAccountNr = function () {
        return this._accountNr;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this._balance -= amount;
    };
    BankAccount.prototype.deposit = function (amount) {
        this._balance += amount;
    };
    return BankAccount;
})();