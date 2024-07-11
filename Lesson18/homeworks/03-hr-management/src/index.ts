import DepartmentManager from "./models/DepartmentManager";
import EmployeeManager from "./models/EmployeeManager";

import { employees } from "./data/employees.data";
import { departments } from "./data/departments.data";
import Employee from "./models/Employee";
import Department from "./models/Department";

console.log('Human resources & Departments Management System');

// Tạo một đối tượng EmployeeManager và DepartmentManager.
const employeeManager = new EmployeeManager();
const departmentManager = new DepartmentManager();

// Tạo một vài nhân viên và phòng ban, sau đó thêm chúng vào hệ thống.
const listOfEmployees = [...employees];
const listOfDepartments = [...departments];

// Thực hiện các thao tác thêm, xóa, cập nhật, chuyển nhân viên giữa các phòng ban.

// Thêm nhân viên
const newEmployee1 = new Employee(21, 'Zoe', 25, 'Software Engineer', 1);
employeeManager.addEmployee(newEmployee1);

const newEmployee2 = new Employee(22, 'Yuri', 27, 'HR Specialist', 2);
employeeManager.addEmployee(newEmployee2);

const newEmployee3 = new Employee(23, 'Xander', 30, 'Financial Analyst', 3);
employeeManager.addEmployee(newEmployee3);

// Xoá nhân viên
employeeManager.removeEmployee(22);

// Cập nhật nhân viên
const updateInfo = { age: 26, position: 'Senior Software Engineer' }
employeeManager.updateEmployee(21, updateInfo);

// Chuyển nhân viên giữa các phòng ban
departmentManager.moveEmployeeToDepartment(21, 3);

// Thêm phòng ban
const newDepartment1 = new Department(11, 'Laws', []);
departmentManager.addDepartment(newDepartment1);
const newDepartment2 = new Department(12, 'BOD', []);
departmentManager.addDepartment(newDepartment2);

// Tạo báo cáo và thống kê liên quan đến nhân viên và phòng ban.
const report = departmentManager.generateDepartmentReport(1);

// Liệt kê và tìm kiếm nhân viên, sắp xếp danh sách nhân viên theo các tiêu chí khác nhau.

// Liệt kê và tìm kiếm nhân viên theo tên.
const searchString = 'a'
const nameSearchResult = employeeManager.findEmployeesByName(searchString);

// sắp xếp danh sách nhân viên theo tuổi
const ascAgeList = employeeManager.sortEmployeesByAge();