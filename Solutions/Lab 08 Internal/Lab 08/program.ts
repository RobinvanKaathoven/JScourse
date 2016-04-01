/// <reference path="bank.ts" />

var bank: Bank.Bank = new Bank.Bank;

bank.createAccount(50, false); // nr 1
bank.createAccount(100, true); // nr 2

try {
    bank.transferMoney(x=> x.getAccountNr() === "1", x=> x.getAccountNr() === "2", 100); // should error
}
catch (e) {
    console.log(e.message);
}

bank.transferMoney(x=> x.getAccountNr() === "2", x=> x.getAccountNr() === "1", 150);

console.log(bank.findAccount(x=> x.getAccountNr() === "2").getBalance()); // should be -50

console.log(bank.findAccount(x=> x.getAccountNr() === "1").getBalance()); // should be 250