import IDepartmentManager from "../interfaces/IDepartmentManager";
import Department from "./Department";
import Employee from "./Employee";

export default class DepartmentManager implements IDepartmentManager {
    // Add your code here
    constructor(public departments: Department[] = []) {}

    addDepartment(department: Department): void {
        this.departments.push(department);
    }

    removeDepartment(id: number): void {
        const index = this.departments.findIndex(department => department.id === id);
        if (index === -1) {
            console.log("Department not found");
            return;
        }

        this.departments = this.departments.filter(department => department.id !== id);
    }

    getDepartmentById(id: number): Department | undefined {
        return this.departments.find((department) => department.id === id);
    }

    listAllDepartments(): Department[] {
        return this.departments;
    }

    listEmployeesInDepartment(departmentId: number): Employee[] {
        const foundDepartment = this.departments.find(department => department.id === departmentId);

        if (!foundDepartment) {
            return [];
        }

        return foundDepartment.employees;
    }

    moveEmployeeToDepartment(employeeId: number, departmentId: number): void {
        // find currentDepartmentId which employee is working
        const currentDepartmentContainsEmployeeId = this.departments.find((department) => {
            const employees = department.employees;

            return employees.find((employee) => employee.id === employeeId);
        });

        if (!currentDepartmentContainsEmployeeId) {
            console.log(`The Employee ID ${employeeId} does not exist!`);
            return;
        }

        // find employeeId who will be moved to
        const foundEmployee = currentDepartmentContainsEmployeeId.employees.find((employee) => {
            if (employee.id === employeeId) {
                return employee;
            }
        });
        if (!foundEmployee) {
            console.log(`The Employee ID ${employeeId} does not exist!`);
            return;
        }

        // find departmentId which employeeId will be moved to
        const departmentEmployeeMoves = this.departments.find((department) => {
            if (department.id === departmentId) {
                return department;
            }
        });

        if (!departmentEmployeeMoves) {
            console.log(`The Department ID ${departmentId} does not exist!`);
            return;
        }

        // remove employeeId from currentDepartmentId
        currentDepartmentContainsEmployeeId.employees = currentDepartmentContainsEmployeeId.employees.filter((employee) => {
            if (employee.id !== employeeId) {
                return employee;
            }
        });

        // add employeeId to departmentId
        departmentEmployeeMoves.employees.push(foundEmployee);

        // Don't forget validating!!!

    }

    /**
     * Utility Types : Omit
     * lấy thông tin phòng ban mà không bao gồm danh sách nhân viên.
     * @param id 
     */
    getDepartmentWithoutEmployees(id: number): Omit<Department, 'employees'> | undefined  {
        const index = this.departments.findIndex((department, index) => {
            if (department.id === id) {
                return index;
            }
        });

        if (index === -1) {
            console.log("Department not found");
            return;
        }

        const { id: departmentId, name } = this.departments[index];

        return { id: departmentId, name };
    }

    // Báo cáo và Thống kê 

    /**
     * Tạo báo cáo chứa thông tin chi tiết về phòng ban, 
     * bao gồm danh sách nhân viên và các thông tin liên quan.
     * @param departmentId 
     */
    generateDepartmentReport(departmentId: number): string {
        const index = this.departments.findIndex((department, index) => {
            if (department.id === departmentId) {
                return index;
            }
        });

        if (index === -1) {
            return "Department not found";
        }

        const department = this.departments[index];
        const employees = department.employees;
        
        return `
            - Department: ${department.name}
            - List of employees: 
                ${employees.map((employee) => {
                    return `
                        - ID: ${employee.id}
                        - Name: ${employee.name}
                        - Age: ${employee.age}
                        - Position: ${employee.position}
                    `;
                })}
        `
    }

    /**
     * Trả về số lượng nhân viên trong một phòng ban cụ thể.
     * @param departmentId 
     * @returns 
     */
    getDepartmentEmployeeCount(departmentId: number): number {
        const index = this.departments.findIndex((department, index) => {
            if (department.id === departmentId) {
                return index;
            }
        });

        if (index === -1) {
            return -1;
        }

        const department = this.departments[index];

        return department.employees.length;
    }

    /**
     * Tính tuổi trung bình của nhân viên trong một phòng ban.
     * @param departmentId 
     * @returns 
     */
    getAverageEmployeeAgeInDepartment(departmentId: number): number {
        let totalAge = 0;

        const index = this.departments.findIndex((department, index) => {
            if (department.id === departmentId) {
                return index;
            }
        });

        if (index === -1) {
            return -1;
        }

        this.departments[index].employees.forEach(employee => {
            totalAge += employee.age;
        });

        return totalAge;

    }
}