export class BankAccount {
  constructor(accountHolder, accountNumber, balance) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      alert("Insufficient funds.");
    }
  }
}
