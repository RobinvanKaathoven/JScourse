var SavingsAccount = (function () {
    function SavingsAccount(accountNumber, initialBalance) {
        BankAccount.call(this, accountNumber, initialBalance);
    }
    SavingsAccount.prototype = Object.create(BankAccount.prototype);
    SavingsAccount.constructor = SavingsAccount;

    SavingsAccount.prototype.withdraw = function (amount) {
        if (this._balance - amount < 0) {
            throw { message: 'Balance cant be negative' };
        }
        BankAccount.prototype.withdraw.call(this, amount);
    };

    return SavingsAccount;
})();