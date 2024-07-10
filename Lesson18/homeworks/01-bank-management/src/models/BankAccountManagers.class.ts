import IBankAccountManager from "../interfaces/BankAccountManager.interface";
import BankAccount from "./BankAccounts.class";

export default class BankAccountManagers implements IBankAccountManager {
    private accounts: BankAccount[];

    constructor(accounts: BankAccount[]) {
        this.accounts = accounts;
    }

    createAccount(newAccount: BankAccount): void {
        this.accounts.push(newAccount);
    }

    closeAccount(accountNumber: number): void {
        const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);

        if (index === -1) {
            console.log('Account not found!');
            return;
        }

        console.log(`Account ${this.accounts[index]} is closed!`);

        this.accounts = this.accounts.filter(account => account.accountNumber !== accountNumber);
    }

    getAccountByNumber(accountNumber: number): BankAccount | undefined {
        const foundAccount = this.accounts.find(account => account.accountNumber === accountNumber);
        if (!foundAccount) { 
            console.log('Account not found!');
        }
        return foundAccount;
    }

    listAllAccounts(): BankAccount[] {
        return this.accounts;
    }

    deposit(accountNumber: number, amount: number): void {
        const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);

        if (index === -1) {
            console.log('Account not found!');
            return;
        }

        if (amount <= 0) {
            console.log('Invalid amount!');
            return;
        }

        console.log(`Account's balance before depositing: ${this.accounts[index].balance}`);

        this.accounts[index].balance += amount;

        console.log(`Account's balance after depositing: ${this.accounts[index].balance}`);
    }

    withdraw(accountNumber: number, amount: number): void {
        const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);

        if (index === -1) {
            console.log('Account not found!');
            return;
        }

        if (amount <= 0) {
            console.log('Invalid amount!');
            return;
        }

        if (this.accounts[index].balance < amount) {
            console.log('Not enough balance!');
            return;
        }

        console.log(`Account's balance before withdrawing: ${this.accounts[index].balance}`);

        this.accounts[index].balance -= amount;
        
        console.log(`Account's balance after withdrawing: ${this.accounts[index].balance}`);
    }

    /**
     * Utility Types: Pick
     * @param accountNumber 
     * Chỉ lấy tên chủ tài khoản và số dư của tài khoản dựa trên số tài khoản.
     */
    getAccountHolderAndBalance(accountNumber: number): Pick<BankAccount, 'accountHolder' | 'balance'> | undefined {
        const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);

        if (index === -1) {
            console.log('Account not found!');
            return;
        }

        const { accountHolder, balance } = this.accounts[index];

        return { accountHolder, balance };
    }

    /**
     * Utility Types: Omit
     * @param accountNumber 
     * Chỉ để lấy thông tin tài khoản mà không bao gồm số dư.
     */
    getAccountWithoutBalance(accountNumber: number): Omit<BankAccount, 'balance'> | undefined {
        const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);

        if (index === -1) {
            console.log('Account not found!');
            return;
        }

        const { accountHolder } = this.accounts[index];

        return { accountNumber, accountHolder };
    }

    /**
     * 
     * @param accountNumber 
     * @param updatedInfo 
     * Cập nhật thông tin tài khoản, cho phép cập nhật một phần thông tin
     */
    updateAccount(accountNumber: number, updatedInfo: Partial<BankAccount>): void {
        const index = this.accounts.findIndex(account => account.accountNumber === accountNumber);

        if (index === -1) {
            console.log('Account not found!');
            return;
        }

        this.accounts[index] = { ...this.accounts[index], ...updatedInfo };
    }
}