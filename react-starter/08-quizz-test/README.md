-Đề tài: Trang web thi thử
-Route (tuyến đường):
	*Chưa đăng nhập cũng có thể truy cập được
		+Trang chủ 
			=> path: '/'
		+Đăng nhập 
			=> path: '/login'
		+Đăng ký 
			=> path: '/register'
		+Danh sách các đề thi theo các môn
		+Danh sách các đề thi theo các môn và theo các học phần
			=> path: '/list-exam'
		+Liên hệ
			=> path: '/contact'
		+Trang thi (xem)
			=> path: '/detail/:idDeThi'
	*Đã đăng nhập mới có thể truy cập được
		+Bảng điểm
			=> path: '/transcript'
		+Trang cá nhân
			=> path: '/profile'
		+Đổi mật khẩu
			=> path: '/change-password'
		+Trang thi (có thể làm được)
			=> path: '/detail/:idDeThi'
	*Trang admin
		=>path: '/admin'
		+Quản lý đề thi (thêm, sửa, xóa đề thi)
			Xem toàn bộ danh sách đề thi: => path: '/admin/exams'
			Thêm đề thi: => path: '/admin/exams/create'
			Sửa đề thi: => path: '/admin/exams/update/:idDeThi'
		+Quản lý user (thêm, xóa)
			Xem toàn bộ danh sách user: => path: '/admin/users'
		+Danh sách feedback
			
	*Đã đăng nhập thì không thể vào được
		+Đăng nhập
		+Đăng ký

-Các chức năng:
	+Đăng nhập
	+Đăng ký
	+Đăng xuất
	+Đổi mật khẩu
	+Sửa thông tin
	+Bảng điểm (show lịch sử các đề thi đã làm)
	+Danh sách các đề thi (sort, filter, pagination)
	+Thi thử 
	+Liên hệ (gửi feedback)
	+Comment
	

Đăng nhập / Đăng ký
	-Sử dụng json-server để làm backend
Private route, phân quyền 


//Demo
{
	"tên_collection": [
		{},
	],
}

Ví dụ:
{
	users: [], //người dùng
	history: [], //lịch sử các đề thi đã làm
	feedbacks: [], //góp ý
	exams: [], //các đề thi
}

user: {
	id:
	email: 
	password: 
	username: 
	role: admin/user
}

//Chưa có validate
exams: {
	name: //tên đề thi
	time: //thời gian để hoàn thành đề thi
	subject: //môn thi
	level:  //mức độ
	questions: [
		{
			question:
			answers: ['Đáp án A', 'Đáp án B'],
			answer_correct: 0
		}
	],
	highest_point: null
}

-Các chức năng cần bổ sung:
	-Tạo private route cho vấn đề phân quyền 
		Mô tả: những account có role là admin thì mới vào được phần /admin (quản trị)
			   những account có role là user thì không vào được trang quản trị, khi cố tình vào đường dẫn /admin => tự động điều hướng về trang chủ
	-Validate cho các input trong phần tạo đề thi, sử dụng formik và yup
	-Validate các input trong phần đóng góp ý kiến (/contact) và ghép api, khi mà bấm vào button Gửi ý kiến => lưu vào file db.json