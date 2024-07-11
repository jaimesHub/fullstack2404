import Employee from "../models/Employee";

export default interface IEmployeeManager {
    /**
     * Thêm một nhân viên mới vào hệ thống.
     * @param employee 
     */
    addEmployee(employee: Employee): void;

    /**
     * Xóa nhân viên khỏi hệ thống dựa trên mã nhân viên.
     * @param id 
     */
    removeEmployee(id: number): void;

    /**
     * Lấy thông tin nhân viên dựa trên mã nhân viên.
     * @param id 
     */
    getEmployeeById(id: number): Employee | undefined;

    /**
     * Liệt kê tất cả các nhân viên hiện có.
     */
    listAllEmployees(): Employee[];

    /**
     * Cập nhật thông tin nhân viên.
     * @param id 
     * @param updatedInfo 
     */
    updateEmployee(id: number, updatedInfo: Partial<Employee>): void;
}