export default class BankAccount {
    public accountNumber: number;
    public accountHolder: string;
    public balance: number = 0;

    constructor(accountNumber: number, accountHolder: string, balance: number) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
}