# Bài tập cơ bản

## Bài tập 1: Cơ bản về Kiểu dữ liệu
- Tạo biến và khai báo kiểu: Hãy tạo các biến sau và khai báo kiểu phù hợp cho mỗi biến:
	- Biến `fullName` lưu trữ tên đầy đủ của một người.
	- Biến `age` lưu trữ tuổi của người đó.
	- Biến `isStudent` biểu thị người đó có phải là sinh viên hay không.
- Viết hàm `printId` nhận vào một tham số có thể là chuỗi hoặc số. Nếu tham số là chuỗi, hàm sẽ in ra ID: <tham số>. Nếu tham số là số, hàm sẽ in ra Employee ID: <tham số>.
- Định nghĩa alias `Person` cho một object có các thuộc tính name (kiểu string) và age (kiểu number). Sử dụng `alias` này để khai báo một biến person với các giá trị tương ứng.

## Bài tập 2: Mảng và Tuple
- Mảng: Tạo một mảng numbers chứa các số nguyên. Viết hàm `sumArray` nhận vào một mảng số nguyên và trả về tổng của các phần tử trong mảng.
- Tuple: Định nghĩa một tuple employee có hai phần tử: tên nhân viên (kiểu string) và tuổi (kiểu number). Khởi tạo một biến emp1 là một đối tượng tuple và gán giá trị tương ứng.

## Bài tập 3: Optional Chaining và Nullish Coalescing
- Optional Chaining: Định nghĩa một đối tượng customer có thuộc tính name và address. Viết một biểu thức sử dụng optional chaining để truy cập thuộc tính street của địa chỉ nếu có.
- Nullish Coalescing: Viết hàm getUserName nhận vào một object user có thuộc tính name và trả về tên người dùng nếu tồn tại, ngược lại trả về "Guest".

# Bài tập kết hợp

## Bài tập 4: Thực hành tổng hợp
- Shopping Cart: Tạo một interface Product có các thuộc tính name (string) và price (number). Viết một hàm calculateTotal nhận vào một mảng các sản phẩm và tính tổng giá của các sản phẩm đó.
- Temperature Converter: Viết một class `TemperatureConverter` có `hai phương thức`:
	- `toCelsius`: Chuyển đổi từ độ Fahrenheit sang Celsius.
	- `toFahrenheit`: Chuyển đổi từ độ Celsius sang Fahrenheit.
- Mô-đun và Export: Tạo một mô-đun mathOperations có các hàm add, subtract, multiply, và divide. Export các hàm này để có thể sử dụng trong các file khác.

## Bài tập 5: Quản lý Danh sách Công Việc
- Định nghĩa các kiểu dữ liệu: Tạo các kiểu dữ liệu để đại diện cho một công việc (Task), bao gồm các thuộc tính như id (number), title (string), description (string), dueDate (Date), priority (string), và completed (boolean).
- Quản lý danh sách công việc:
	- Tạo một mảng tasks để lưu trữ danh sách các công việc.
    - Viết các hàm để thêm công việc mới, xóa công việc, cập nhật trạng thái hoàn thành của công việc và hiển thị danh sách công việc.
- Thao tác với dữ liệu:
	- Viết hàm filterTasksByPriority để lọc các công việc theo mức độ ưu tiên (priority).
	- Viết hàm sortTasksByDueDate để sắp xếp danh sách công việc theo thời hạn hoàn thành.

## Bài tập 6: Quản lý Danh sách Sản Phẩm
- Định nghĩa các kiểu dữ liệu: Tạo các kiểu dữ liệu để đại diện cho một sản phẩm (Product), bao gồm các thuộc tính như id (number), name (string), price (number), quantity (number), description (string).
- Quản lý danh sách sản phẩm:
	- Tạo một mảng products để lưu trữ danh sách các sản phẩm.
	- Viết các hàm để thêm sản phẩm mới, xóa sản phẩm, cập nhật thông tin sản phẩm và hiển thị danh sách sản phẩm.
- Thao tác với dữ liệu:
	- Viết hàm calculateTotalPrice để tính tổng giá trị của tất cả các sản phẩm trong danh sách.
	- Viết hàm findProductById để tìm sản phẩm theo id.

## Bài tập 7: Quản lý Danh sách Người Dùng
- Định nghĩa các kiểu dữ liệu: Tạo các kiểu dữ liệu để đại diện cho một người dùng (User), bao gồm các thuộc tính như id (number), username (string), email (string), password (string), role (string).
- Quản lý danh sách người dùng:
	- Tạo một mảng users để lưu trữ danh sách các người dùng.
	- Viết các hàm để thêm người dùng mới, xóa người dùng, cập nhật thông tin người dùng và hiển thị danh sách người dùng.
- Thao tác với dữ liệu:
	- Viết hàm findUserByEmail để tìm người dùng theo email.
	- Viết hàm changePassword để thay đổi mật khẩu của người dùng.

