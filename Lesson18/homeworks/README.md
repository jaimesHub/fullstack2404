# Homeworks
Bài tập 1: Quản lý tài khoản ngân hàng
* Mô tả: Tạo một hệ thống quản lý tài khoản ngân hàng với các yêu cầu sau:
1. Class BankAccount:
	- Thuộc tính:
		+ accountNumber: số tài khoản (kiểu số).
		+ accountHolder: tên chủ tài khoản (kiểu chuỗi).
		+ balance: số dư tài khoản (kiểu số, mặc định là 0).
2. Interface IBankAccountManager
	- Phương thức:
		+ createAccount(account: BankAccount): void: Tạo một tài khoản mới và thêm vào danh sách tài khoản.
		+ closeAccount(accountNumber: number): void: Đóng một tài khoản bằng cách xóa tài khoản khỏi danh sách.
		+ getAccountByNumber(accountNumber: number): BankAccount | undefined: Lấy thông tin tài khoản dựa trên số tài khoản.
		+ listAllAccounts(): BankAccount[]: Liệt kê tất cả các tài khoản hiện có.
		+ deposit(accountNumber: number, amount: number): void: Nạp tiền vào tài khoản dựa trên số tài khoản và số tiền.
		+ withdraw(accountNumber: number, amount: number): void: Rút tiền từ tài khoản dựa trên số tài khoản và số tiền.
3. Class BankAccountManager
	- Implement interface IBankAccountManager để quản lý danh sách tài khoản ngân hàng.
	- Các phương thức phải thực hiện đầy đủ các chức năng như mô tả trong IBankAccountManager.
4. Yêu cầu mở rộng
	- Sử dụng Utility Types
		+ Tạo phương thức getAccountHolderAndBalance(accountNumber: number): Pick<BankAccount, 'accountHolder' | 'balance'> | undefined để chỉ lấy tên chủ tài khoản và số dư của tài khoản.
		+ Tạo phương thức getAccountWithoutBalance(accountNumber: number): Omit<BankAccount, 'balance'> | undefined để lấy thông tin tài khoản mà không bao gồm số dư.
	- Cập nhật thông tin tài khoản
		+ Tạo phương thức updateAccount(accountNumber: number, updatedInfo: Partial<BankAccount>): void để cập nhật thông tin tài khoản, cho phép cập nhật một phần thông tin.
* Lưu ý:
	- Đảm bảo các phương thức nạp tiền và rút tiền kiểm tra số dư tài khoản để tránh tình trạng rút quá số dư.
	- Viết các phương thức xử lý lỗi khi tài khoản không tồn tại hoặc số tiền rút lớn hơn số dư.
	- Các phương thức và thuộc tính cần được định nghĩa rõ ràng, có chú thích và giải thích các tham số, giá trị trả về.
* Ví dụ sử dụng:
	- Tạo một đối tượng BankAccountManager.
	- Tạo một vài tài khoản và thêm chúng vào BankAccountManager.
	- Thực hiện nạp tiền, rút tiền, cập nhật thông tin tài khoản.
	- Liệt kê tất cả các tài khoản và hiển thị thông tin chi tiết.
	
Bài tập 2: Quản lý sản phẩm trong cửa hàng
* Mô tả: Tạo một hệ thống quản lý sản phẩm với các yêu cầu sau:
1. Class Product
	- Thuộc tính:
		+ id: mã sản phẩm (kiểu số).
		+ name: tên sản phẩm (kiểu chuỗi).
		+ price: giá sản phẩm (kiểu số).
		+ category: danh mục sản phẩm (kiểu chuỗi).
2. Interface IProductManager
	- Phương thức:
		+ addProduct(product: Product): void: Thêm một sản phẩm mới vào danh sách sản phẩm.
		+ removeProduct(id: number): void: Xóa sản phẩm khỏi danh sách dựa trên mã sản phẩm.
		+ getProductById(id: number): Product | undefined: Lấy thông tin sản phẩm dựa trên mã sản phẩm.
		+ listAllProducts(): Product[]: Liệt kê tất cả các sản phẩm hiện có.
3. Class ProductManager
	- Implement interface IProductManager để quản lý danh sách sản phẩm.
	- Các phương thức phải thực hiện đầy đủ các chức năng như mô tả trong IProductManager.
4. Yêu cầu mở rộng
	- Sử dụng Utility Types
		+ Tạo phương thức getProductNameAndCategory(id: number): Pick<Product, 'name' | 'category'> | undefined để chỉ lấy tên và danh mục của sản phẩm.
		+ Tạo phương thức getProductWithoutPrice(id: number): Omit<Product, 'price'> | undefined để lấy thông tin sản phẩm mà không bao gồm giá.
	- Cập nhật thông tin sản phẩm
		+ Tạo phương thức updateProduct(id: number, updatedInfo: Partial<Product>): void để cập nhật thông tin sản phẩm, cho phép cập nhật một phần thông tin.
	- Tìm kiếm sản phẩm theo danh mục
		+ Tạo phương thức findProductsByCategory(category: string): Product[] để tìm kiếm và trả về danh sách các sản phẩm thuộc danh mục cụ thể.
	- Tính tổng giá trị hàng tồn kho
		+ Tạo phương thức calculateTotalInventoryValue(): number để tính tổng giá trị của tất cả các sản phẩm trong danh sách dựa trên giá và số lượng.
* Lưu ý:
	- Đảm bảo các phương thức kiểm tra và xử lý lỗi khi sản phẩm không tồn tại.
	- Các phương thức và thuộc tính cần được định nghĩa rõ ràng, có chú thích và giải thích các tham số, giá trị trả về.
* Ví dụ sử dụng:
	- Tạo một đối tượng ProductManager.
	- Tạo một vài sản phẩm và thêm chúng vào ProductManager.
	- Thực hiện thêm, xóa, và cập nhật sản phẩm.
	- Tìm kiếm sản phẩm theo danh mục và tính tổng giá trị hàng tồn kho.
	- Liệt kê tất cả các sản phẩm và hiển thị thông tin chi tiết.
	
Bài tập 3: Hệ thống quản lý nhân sự và phòng ban trong công ty
* Mô tả: Tạo một hệ thống quản lý nhân sự và phòng ban với các yêu cầu sau:
1. Class Employee
	- Thuộc tính:
		+ id: mã nhân viên (kiểu số).
		+ name: tên nhân viên (kiểu chuỗi).
		+ age: tuổi nhân viên (kiểu số).
		+ position: chức vụ (kiểu chuỗi).
		+ departmentId: mã phòng ban (kiểu số).
2. Class Department
	- Thuộc tính:
		+ id: mã phòng ban (kiểu số).
		+ name: tên phòng ban (kiểu chuỗi).
		+ employees: danh sách nhân viên thuộc phòng ban (kiểu Employee[]).
3. Interface IEmployeeManager
	- Phương thức:
		+ addEmployee(employee: Employee): void: Thêm một nhân viên mới vào hệ thống.
		+ removeEmployee(id: number): void: Xóa nhân viên khỏi hệ thống dựa trên mã nhân viên.
		+ getEmployeeById(id: number): Employee | undefined: Lấy thông tin nhân viên dựa trên mã nhân viên.
		+ listAllEmployees(): Employee[]: Liệt kê tất cả các nhân viên hiện có.
		+ updateEmployee(id: number, updatedInfo: Partial<Employee>): void: Cập nhật thông tin nhân viên.
4. Interface IDepartmentManager
	- Phương thức:
		+ addDepartment(department: Department): void: Thêm một phòng ban mới vào hệ thống.
		+ removeDepartment(id: number): void: Xóa phòng ban khỏi hệ thống dựa trên mã phòng ban.
		+ getDepartmentById(id: number): Department | undefined: Lấy thông tin phòng ban dựa trên mã phòng ban.
		+ listAllDepartments(): Department[]: Liệt kê tất cả các phòng ban hiện có.
		+ listEmployeesInDepartment(departmentId: number): Employee[]: Liệt kê tất cả các nhân viên thuộc một phòng ban cụ thể.
		+ moveEmployeeToDepartment(employeeId: number, departmentId: number): void: Chuyển nhân viên sang phòng ban khác.
5. Class EmployeeManager
	- Implement interface IEmployeeManager để quản lý danh sách nhân viên.
6. Class DepartmentManager
	- Implement interface IDepartmentManager để quản lý danh sách phòng ban và nhân viên trong các phòng ban.
7. Yêu cầu mở rộng
	- Sử dụng Utility Types
		+ Tạo phương thức getEmployeeBasicInfo(id: number): Pick<Employee, 'name' | 'position'> | undefined để chỉ lấy tên và chức vụ của nhân viên.
		+ Tạo phương thức getDepartmentWithoutEmployees(id: number): Omit<Department, 'employees'> | undefined để lấy thông tin phòng ban mà không bao gồm danh sách nhân viên.
	- Báo cáo và Thống kê
		+ Tạo phương thức generateDepartmentReport(departmentId: number): string để tạo báo cáo chứa thông tin chi tiết về phòng ban, bao gồm danh sách nhân viên và các thông tin liên quan.
		+ Tạo phương thức getDepartmentEmployeeCount(departmentId: number): number để trả về số lượng nhân viên trong một phòng ban cụ thể.
		+ Tạo phương thức getAverageEmployeeAgeInDepartment(departmentId: number): number để tính tuổi trung bình của nhân viên trong một phòng ban.
	- Tìm kiếm và Sắp xếp
		+ Tạo phương thức findEmployeesByName(name: string): Employee[] để tìm kiếm nhân viên theo tên.
		+ Tạo phương thức sortEmployeesByAge(): Employee[] để sắp xếp danh sách nhân viên theo tuổi.
* Lưu ý:
	- Đảm bảo các phương thức kiểm tra và xử lý lỗi khi nhân viên hoặc phòng ban không tồn tại.
	- Các phương thức và thuộc tính cần được định nghĩa rõ ràng, có chú thích và giải thích các tham số, giá trị trả về.
* Ví dụ sử dụng:
	- Tạo một đối tượng EmployeeManager và DepartmentManager.
	- Tạo một vài nhân viên và phòng ban, sau đó thêm chúng vào hệ thống.
	- Thực hiện các thao tác thêm, xóa, cập nhật, chuyển nhân viên giữa các phòng ban.
	- Tạo báo cáo và thống kê liên quan đến nhân viên và phòng ban.
	- Liệt kê và tìm kiếm nhân viên, sắp xếp danh sách nhân viên theo các tiêu chí khác nhau.
* Thông tin các chức vụ (tham khảo)
	- Chức vụ trong công ty
	- Intern (Thực tập sinh)
	- Junior Developer (Lập trình viên cấp thấp)
	- Developer (Lập trình viên)
	- Senior Developer (Lập trình viên cao cấp)
	- Lead Developer (Trưởng nhóm phát triển)
	- QA Engineer (Kỹ sư kiểm thử)
	- QA Manager (Quản lý kiểm thử)
	- Project Manager (Quản lý dự án)
	- Product Manager (Quản lý sản phẩm)
	- HR Specialist (Chuyên viên nhân sự)
	- HR Manager (Quản lý nhân sự)
	- Finance Specialist (Chuyên viên tài chính)
	- Finance Manager (Quản lý tài chính)
	- Marketing Specialist (Chuyên viên marketing)
	- Marketing Manager (Quản lý marketing)
	- Sales Specialist (Chuyên viên bán hàng)
	- Sales Manager (Quản lý bán hàng)
	- IT Support (Hỗ trợ IT)
	- IT Manager (Quản lý IT)
	- Chief Technology Officer (CTO) (Giám đốc công nghệ)
	- Chief Executive Officer (CEO) (Giám đốc điều hành)
	- Chief Financial Officer (CFO) (Giám đốc tài chính)
	- Chief Operating Officer (COO) (Giám đốc vận hành)