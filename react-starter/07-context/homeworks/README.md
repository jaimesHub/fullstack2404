# I. Ứng dụng Quản lý Giỏ hàng với `useContext` trong ReactJS

## `Mục tiêu`: Tạo một ứng dụng quản lý giỏ hàng đơn giản sử dụng `React Context API` và hook `useContext` để quản lý trạng thái giỏ hàng.

## Mô tả chi tiết:
	1. Tạo CartContext
		- Mục đích: Tạo một context để chia sẻ trạng thái giỏ hàng giữa các component trong ứng dụng.
		- Thực hiện:
			+ Sử dụng createContext để tạo một context mới.
			+ Tạo một provider component để cung cấp giá trị context cho các component con.
	2. Tạo ProductList Component
		- Mục đích: Hiển thị danh sách các sản phẩm và cho phép người dùng thêm sản phẩm vào giỏ hàng.
		- Thực hiện:
			+ Tạo một danh sách các sản phẩm mẫu.
			+ Sử dụng useContext để truy cập hàm addToCart từ CartContext.
	3. Tạo Cart Component
		- Mục đích: Hiển thị các sản phẩm đã được thêm vào giỏ hàng và tổng số lượng sản phẩm trong giỏ hàng.
		- Thực hiện:	
			+ Sử dụng useContext để truy cập trạng thái giỏ hàng từ CartContext.
	4. Kết nối các Component trong App
		- Mục đích: Sử dụng CartProvider để bọc toàn bộ ứng dụng và hiển thị các component ProductList và Cart.
		- Thực hiện:
			+ Import CartProvider, ProductList, và Cart.
			+ Sử dụng CartProvider để bọc các component con.
## Chức năng của ứng dụng:
	- Thêm sản phẩm vào giỏ hàng: Khi người dùng nhấn nút "Add to Cart" bên cạnh một sản phẩm trong danh sách sản phẩm, sản phẩm đó sẽ được thêm vào giỏ hàng.
	- Hiển thị giỏ hàng: Component Cart sẽ hiển thị tất cả các sản phẩm hiện có trong giỏ hàng và tổng số lượng sản phẩm.
	- Tính tổng số lượng sản phẩm: Hàm getCartTotal sẽ trả về tổng số lượng sản phẩm trong giỏ hàng.
## Kết quả mong đợi:
	Khi hoàn thành bài tập này, bạn sẽ có một ứng dụng đơn giản cho phép người dùng thêm sản phẩm vào giỏ hàng, hiển thị danh sách sản phẩm trong giỏ hàng và tổng số lượng sản phẩm. Bạn sẽ hiểu rõ hơn về cách sử dụng useContext để quản lý trạng thái toàn cục trong ứng dụng React.

# II. Bài tập: Đếm số lần nhấn nút mà không làm component re-render
## `Mục tiêu`: Tạo một component có một nút bấm để đếm số lần nhấn. Sử dụng `useRef` để lưu trữ số lần nhấn mà `không` làm component `re-render`.

## Mô tả chi tiết:
	1. Tạo một component gọi là ClickCounter:
		Sử dụng useRef để lưu trữ số lần nhấn nút.
		Hiển thị số lần nhấn nút bằng cách sử dụng state.
		Tạo một nút để tăng số lần nhấn.
## Kết quả mong đợi:
	1. Khi bạn chạy ứng dụng này:
		Khi bạn nhấn nút "Click me", số lần nhấn sẽ được lưu trữ trong countRef và hiển thị trên màn hình.

# III .Bài tập: Tạo đồng hồ bấm giờ
## Mục tiêu: Tạo một đồng hồ bấm giờ đơn giản có thể bắt đầu, dừng và đặt lại. Sử dụng useRef để quản lý id của setInterval và useState để lưu trữ thời gian hiện tại.
## Mô tả chi tiết:
	1. Tạo một component gọi là Stopwatch:
		Sử dụng useRef để lưu trữ id của setInterval.
		Sử dụng useState để lưu trữ thời gian hiện tại.
		Tạo các nút để bắt đầu, dừng và đặt lại đồng hồ bấm giờ.
## Kết quả mong đợi:
	1. Khi bạn chạy ứng dụng này:
		Khi bạn nhấn nút "Start", đồng hồ bấm giờ sẽ bắt đầu đếm thời gian.
		Khi bạn nhấn nút "Stop", đồng hồ bấm giờ sẽ dừng lại.
		Khi bạn nhấn nút "Reset", thời gian sẽ được đặt lại về 0.