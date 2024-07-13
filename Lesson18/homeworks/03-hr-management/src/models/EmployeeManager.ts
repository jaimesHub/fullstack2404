import IEmployeeManager from "../interfaces/IEmployeeManager";
import Employee from "./Employee";

export default class EmployeeManager implements IEmployeeManager {
    // Add your code here
    constructor(public employees: Employee[] = []) {}

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    removeEmployee(id: number): void {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index === 1) {
            console.log("Employee not found");
            return;
        }

        this.employees = this.employees.filter(employee => employee.id !== id);
    }

    getEmployeeById(id: number): Employee | undefined {
        return this.employees.find((employee) => employee.id === id);
    }

    /**
     * Replace removeEmployee function by removeEmployeeById function.
     * @param id 
     * @returns 
     */
    removeEmployeeById(id: number): void {
        const foundEmployee = this.getEmployeeById(id);
        if (!foundEmployee) {
            console.log("Employee not found");
            return;
        }
        this.employees = this.employees.filter(employee => employee.id !== id);
    }

    listAllEmployees(): Employee[] {
        return this.employees;
    }

    updateEmployee(id: number, updatedInfo: Partial<Employee>): void {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index === -1) {
            console.log("Employee not found");
            return;
        }

        this.employees[index] = {
            ...this.employees[index],
            ...updatedInfo
        };
    }

    updateEmployeeById(id: number, updatedInfo: Partial<Employee>): void {
        const foundEmployee = this.getEmployeeById(id);
        if (!foundEmployee) {
            console.log("Employee not found");
            return;
        }

        Object.assign(foundEmployee, updatedInfo);
    }

    /**
     * Utility Types : Pick
     * Chỉ lấy tên và chức vụ của nhân viên.
     * @param id 
     * @returns 
     */
    getEmployeeBasicInfo(id: number): Pick<Employee, 'name' | 'position'> | undefined {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index === -1) {
            console.log("Employee not found");
            return;
        }

        const foundEmployee = this.employees[index];

        return {
            name: foundEmployee.name,
            position: foundEmployee.position
        }
    }

    /**
     * Utility Types : Pick
     * Replace getEmployeeBasicInfo function by getEmployeeBasicInfoById function.
     * @param id 
     * @returns 
     */
    getEmployeeBasicInfoById(id: number): Pick<Employee, 'name' | 'position'> | undefined {
        const foundEmployee = this.getEmployeeById(id);
        if (!foundEmployee) {
            // console.log("Employee not found");
            return undefined;
        }

        const {  name, position } = foundEmployee;
        return {
            name,
            position
        }
    }

    // Tìm kiếm và Sắp xếp 

    /**
     * Tìm kiếm nhân viên theo tên.
     * @param name 
     * @returns 
     */
    findEmployeesByName(name: string): Employee[] {
        return this.employees.filter((employee) => {
            if (employee.name.toLowerCase().includes(name.toLowerCase())) {
                return employee;
            }
        });
    }

    /**
     * Sắp xếp danh sách nhân viên theo tuổi.
     * @returns 
     */
    sortEmployeesByAge(): Employee[] {
        // Sort employees by age in ascending order
        return this.employees.sort((current, next) => current.age - next.age);
    }
}