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
//# sourceMappingURL=SavingsAccount.js.map