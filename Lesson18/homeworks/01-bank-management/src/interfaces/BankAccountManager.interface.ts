import BankAccount from "../models/BankAccounts.class";
export default interface IBankAccountManager {
    /**
     * 
     * Tạo một tài khoản mới và thêm vào danh sách tài khoản.
     */
    createAccount(account: BankAccount): void;

    /**
     * 
     * Đóng một tài khoản bằng cách xóa tài khoản khỏi danh sách.
     */
    closeAccount(accountNumber: number): void;

    /**
     * 
     * Lấy thông tin tài khoản dựa trên số tài khoản.
     */
    getAccountByNumber(accountNumber: number): BankAccount | undefined;

    /**
     * 
     * Liệt kê tất cả các tài khoản hiện có.
     */
    listAllAccounts(): BankAccount[];

    /**
     * 
     * @param accountNumber Số tài khoản cần nạp tiền.
     * @param amount Số tiền cần nạp.
     * Nạp tiền vào tài khoản dựa trên số tài khoản và số tiền.
     */
    deposit(accountNumber: number, amount: number): void;

    /**
     * 
     * @param accountNumber Số tài khoản cần rút tiền.
     * @param amount Số tiền cần rút.
     * Rút tiền từ tài khoản dựa trên số tài khoản và số tiền.
     */
    withdraw(accountNumber: number, amount: number): void;
}