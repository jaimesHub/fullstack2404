// console.log('Init project successfully!');

import BankAccountManagers from "./models/BankAccountManagers.class";
import BankAccount from "./models/BankAccounts.class";

// Tạo một đối tượng BankAccountManager.
const bankAccountManager = new BankAccountManagers([]);

// Tạo một vài tài khoản và thêm chúng vào BankAccountManager.
const account1 = new BankAccount(123456, 'John Doe', 1000);
const account2 = new BankAccount(789012, 'Jane Doe', 5000);
const account3 = new BankAccount(345678, 'Sam Smith', 750);

bankAccountManager.createAccount(account1);
bankAccountManager.createAccount(account2);
bankAccountManager.createAccount(account3);

// Thực hiện nạp tiền, rút tiền
bankAccountManager.deposit(123456, 500);
bankAccountManager.withdraw(789012, 1000);

// cập nhật thông tin tài khoản.
bankAccountManager.updateAccount(123456, { accountHolder: 'John Doe Jr.' });

// Liệt kê tất cả các tài khoản và hiển thị thông tin chi tiết.
bankAccountManager.listAllAccounts();

// Lấy thông tin tài khoản dựa trên số tài khoản.
const foundAccount = bankAccountManager.getAccountByNumber(345678);
console.log(foundAccount);

// Chỉ lấy tên chủ tài khoản và số dư của tài khoản
const accountInfo = bankAccountManager.getAccountHolderAndBalance(123456);
console.log(accountInfo);

// Chỉ để lấy thông tin tài khoản mà không bao gồm số dư.
const accountWithoutBalance = bankAccountManager.getAccountWithoutBalance(123456);
console.log(accountWithoutBalance);
