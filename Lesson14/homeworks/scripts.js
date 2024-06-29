let listStudent = JSON.parse(localStorage.getItem("listStudent")) ?? [];
// nullish operator

// Khởi tạo dom
const $btnCreate = document.getElementById("create");
const $btnUpdate = document.getElementById("update");
const $inputName = document.getElementById("name");
const $inputMathScore = document.getElementById("math_score");
const $inputEnglishScore = document.getElementById("english_score");
const $inputLiteratureScore = document.getElementById("literature_score");

let indexStudentUpdate = -1;

// Read: hiển thị thông tin danh sách học sinh
function renderListStudent() {
  let string = "";
  for (let i = 0; i < listStudent.length; i++) {
    // template string
    string += `
    <tr>
        <th scope="row">${i + 1}</th>
        <td>${listStudent[i].name}</td>
        <td>${listStudent[i].gender === "boy" ? "Nam" : "Nữ"}</td>
        <td>${listStudent[i].math_score}</td>
        <td>${listStudent[i].english_score}</td>
        <td>${listStudent[i].literature_score}</td>
        <td>8</td>
        <td>
          <button class="btn btn-success" onclick="updateStudent(${i})">Update</button>
          <button class="btn btn-danger" onclick="deleteStudent(${i})">Delete</button>
        </td>
    </tr>
    `;
  }
  document.getElementById("info-student").innerHTML = string;
}
renderListStudent();

// Create
// Bước 1: gán sự kiện onclick cho button "Create student"
$btnCreate.onclick = function () {
  // Bước 2: Xử lý trong hàm
  // -Lấy được các thông tin người dùng nhập ở các input
  const name = $inputName.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const math_score = $inputMathScore.value;
  const english_score = $inputEnglishScore.value;
  const literature_score = $inputLiteratureScore.value;
  // -Tạo một object newStudent
  const newStudent = {
    id: Date.now(),
    name: name,
    gender: gender,
    math_score: math_score,
    english_score: english_score,
    literature_score: literature_score,
  };
  console.log("newStudent: ", newStudent);
  // -Đẩy object newStudent vào mảng listStudent
  listStudent.push(newStudent);
  //   -Cập nhật dữ liệu vào local storage
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
  // -Gọi hàm renderListStudent để hiển thị lại danh sách học sinh
  renderListStudent();
};

// Bước 1: Gán sự kiện onclick cho các button delete
function deleteStudent(index) {
  // Bước 2: Xử lý trong hàm
  //     -Tìm index của học sinh trong danh sách
  //     -Xóa học sinh khỏi danh sách
  listStudent.splice(index, 1);
  //   -Cập nhật dữ liệu vào local storage
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
  //     -Gọi lại hàm renderListStudent để in ra danh sách mới nhất
  renderListStudent();
}

function updateStudent(index) {
  // Bước 1: Khi click vào button update -> lấy được thông tin học sinh
  indexStudentUpdate = index;
  const student = listStudent[index];
  console.log("update...: ", student);
  // Bước 2: Khi đã có thông tin -> show thông tin lên input tương ứng
  $inputName.value = student.name;
  document.querySelector(`input[value=${student.gender}]`).checked = true;
  $inputMathScore.value = student.math_score;
  $inputEnglishScore.value = student.english_score;
  $inputLiteratureScore.value = student.literature_score;
  // Bước 3: Ẩn button "Create student" và hiển thị button "Update student"
  $btnUpdate.style.display = "inline";
  $btnCreate.style.display = "none";
}
// Bước 1: Gán sự kiện onclick cho button Update student
$btnUpdate.onclick = function () {
  // Bước 2: Lấy thông tin người dùng đã chỉnh sửa
  const name = $inputName.value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const math_score = $inputMathScore.value;
  const english_score = $inputEnglishScore.value;
  const literature_score = $inputLiteratureScore.value;
  console.log('name: ', name)
  // Bước 3: Cập nhật thông tin mới vào trong danh sách
  listStudent[indexStudentUpdate].name =  name
  listStudent[indexStudentUpdate].gender =  gender
  listStudent[indexStudentUpdate].math_score =  math_score
  listStudent[indexStudentUpdate].english_score =  english_score
  listStudent[indexStudentUpdate].literature_score =  literature_score

  // Bước 4: Cập nhật dữ liệu vào local storage
  localStorage.setItem("listStudent", JSON.stringify(listStudent));
  // Bước 5: Gọi lại hàm renderListStudent để in ra danh sách mới nhất
  renderListStudent();
  // Bước 6: Reset lại các input
  $inputName.value = "";
  $inputMathScore.value = "";
  $inputEnglishScore.value = "";
  $inputLiteratureScore.value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  indexStudentUpdate = -1;

  // Bước 7: Ẩn button "Update student" và hiển thị button "Create student"
  $btnUpdate.style.display = "none";
  $btnCreate.style.display = "inline";
};
