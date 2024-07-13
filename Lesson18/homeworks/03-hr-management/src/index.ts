import DepartmentManager from "./models/DepartmentManager";
import EmployeeManager from "./models/EmployeeManager";

import { employees } from "./data/employees.data";
import { departments } from "./data/departments.data";
import Employee from "./models/Employee";
import Department from "./models/Department";

console.log('Human resources & Departments Management System');

// Tạo một đối tượng EmployeeManager và DepartmentManager.
const employeeManager = new EmployeeManager();
const departmentManager = new DepartmentManager(employeeManager);

// Tạo một vài nhân viên và phòng ban, sau đó thêm chúng vào hệ thống.
const listOfEmployees = [...employees];
const listOfDepartments = [...departments];

// // Test steps starts
// // Thực hiện các thao tác thêm, xóa, cập nhật, chuyển nhân viên giữa các phòng ban.

// // Thêm nhân viên
// const newEmployee1 = new Employee(21, 'Zoe', 25, 'Software Engineer', 1);
// employeeManager.addEmployee(newEmployee1);

// const newEmployee2 = new Employee(22, 'Yuri', 27, 'HR Specialist', 2);
// employeeManager.addEmployee(newEmployee2);

// const newEmployee3 = new Employee(23, 'Xander', 30, 'Financial Analyst', 3);
// employeeManager.addEmployee(newEmployee3);

// // Xoá nhân viên
// employeeManager.removeEmployee(22);

// // Cập nhật nhân viên
// const updateInfo = { age: 26, position: 'Senior Software Engineer' }
// employeeManager.updateEmployee(21, updateInfo);

// // Chuyển nhân viên giữa các phòng ban
// departmentManager.moveEmployeeToDepartment(21, 3);

// // Thêm phòng ban
// const newDepartment1 = new Department(11, 'Laws', []);
// departmentManager.addDepartment(newDepartment1);
// const newDepartment2 = new Department(12, 'BOD', []);
// departmentManager.addDepartment(newDepartment2);

// // Tạo báo cáo và thống kê liên quan đến nhân viên và phòng ban.
// const report = departmentManager.generateDepartmentReport(1);

// // Liệt kê và tìm kiếm nhân viên, sắp xếp danh sách nhân viên theo các tiêu chí khác nhau.

// // Liệt kê và tìm kiếm nhân viên theo tên.
// const searchString = 'a'
// const nameSearchResult = employeeManager.findEmployeesByName(searchString);

// // sắp xếp danh sách nhân viên theo tuổi
// const ascAgeList = employeeManager.sortEmployeesByAge();

// // Test steps ends

employeeManager.employees = [...listOfEmployees];
departmentManager.departments = [...listOfDepartments];

// for test sorting / searching / report
// departmentManager.departments.forEach(department => {
//     department.employees = employeeManager.employees.filter(employee => employee.departmentId === department.id);
// })

// Logging: Init data test
// console.log('List of employees:', listOfEmployees);
// console.log('List of departments:', listOfDepartments);

// Thêm nhân viên vào hệ thống
const newEmployeeId = employeeManager.employees.length + 1;
const newEmployee = new Employee(newEmployeeId, 'Zoe', 25, 'Software Engineer', 1);
employeeManager.addEmployee(newEmployee);
const foundDepartment = departmentManager.getDepartmentById(newEmployee.departmentId);
if (foundDepartment) {
    foundDepartment.employees.push(newEmployee);

    // add new staff for testing report
    const newStaff = new Employee(employeeManager.employees.length + 1, 'Jack', 25, 'Software Engineer', 1);
    employeeManager.addEmployee(newStaff);
    foundDepartment.employees.push(newStaff);
}
// console.log('List of employees after adding:', employeeManager.employees);
console.log('List of departments after adding:', departmentManager.departments);

// Xoá nhân viên khỏi hệ thống
// employeeManager.removeEmployeeById(newEmployeeId); // Remove Zoe
// console.log('List of employees after removing:', employeeManager.employees);

// Cập nhật thông tin nhân viên
// const zoeInfo = employeeManager.getEmployeeBasicInfo(newEmployeeId);
// console.log('Zoe info before updating:', zoeInfo);
// const updateInfo = { age: 26, position: 'Senior Software Engineer' }; // Update for Zoe
// employeeManager.updateEmployeeById(newEmployeeId, updateInfo);
// console.log('Zoe info after updating:', employeeManager.getEmployeeById(newEmployeeId));
// console.log('List of employees after updating:', employeeManager.employees);

// Basic Employee Info
// // const zoeInfo = employeeManager.getEmployeeBasicInfo(newEmployeeId);
// const zoeInfo = employeeManager.getEmployeeBasicInfoById(newEmployeeId+1);
// if (!zoeInfo) {
//     console.log('Employee not found');
// }
// else console.log('Zoe info::', zoeInfo);

// Move Employee to Current Department to New Department
// const zoe = employeeManager.getEmployeeById(newEmployeeId);

// if (zoe) {
//     console.log(`Info of Zoe BEFORE moving to other department: `, zoe);
//     const departmentZoeBelongsTo = departmentManager.getDepartmentById(zoe.departmentId);
//     console.log(`Zoe belongs to department: `, departmentZoeBelongsTo);
//     const targetDepartmentId = 3;
//     console.log("Target department: ", departmentManager.getDepartmentById(targetDepartmentId));
//     // departmentManager.moveEmployeeToDepartment(newEmployeeId, targetDepartmentId);
//     departmentManager.moveEmployeeToDepartmentIdByEmployeeId(newEmployeeId, targetDepartmentId);
//     console.log(`Info of Zoe AFTER moving to new Department: `, employeeManager.getEmployeeById(newEmployeeId));
//     console.log(`Zoe's PREVIOUS department: `, departmentZoeBelongsTo);
//     console.log(`Zoe's CURRENT department: `, departmentManager.getDepartmentById(targetDepartmentId));
// } else {
//     console.log('Zoe not found');
// }

// Report
// console.log(foundDepartment);

// const report = departmentManager.generateDepartmentReport(foundDepartment?.id || 1);
// console.log('Report:', report);

// Searching 
// console.log("Searching!");
// const searchString = 'an';
// const nameSearchResult = employeeManager.findEmployeesByName(searchString);
// console.log('Search result:', nameSearchResult);

// Sorting
// console.log("Sorting!");
// const ascAgeList = employeeManager.sortEmployeesByAge();
// console.log('Sort employees by age:', ascAgeList);
