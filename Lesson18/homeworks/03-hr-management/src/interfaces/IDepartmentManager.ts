import Department from "../models/Department";
import Employee from "../models/Employee";

export default interface IDepartmentManager {
    /**
     * Thêm một phòng ban mới vào hệ thống.
     * @param department 
     */
    addDepartment(department: Department): void;

    /**
     * Xóa phòng ban khỏi hệ thống dựa trên mã phòng ban.
     * @param id 
     */
    removeDepartment(id: number): void;

    /**
     * Lấy thông tin phòng ban dựa trên mã phòng ban.
     * @param id 
     */
    getDepartmentById(id: number): Department | undefined;

    /**
     * Liệt kê tất cả các phòng ban hiện có.
     */
    listAllDepartments(): Department[];

    /**
     * Liệt kê tất cả các nhân viên thuộc một phòng ban cụ thể.
     * @param departmentId
     */
    listEmployeesInDepartment(departmentId: number): Employee[];

    /**
     * Chuyển nhân viên sang phòng ban khác.
     * @param employeeId 
     * @param departmentId 
     */
    moveEmployeeToDepartment(employeeId: number, departmentId: number): void;
}