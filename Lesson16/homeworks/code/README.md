# Practice

1. Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
    
    ```jsx
    Input: "abcdef"
    Ouput: "fedcba"
    ```

2. Viết một function xoá các phần từ trùng lặp trong một mảng các số:
    
    ```jsx
    Input: [1, 2, 3, 5, 4, 2, 6, 4]
    Output: [1, 2, 3, 5, 4, 6]
    ```

3. Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng

---
```jsx
Tạo 1 thư mục với cấu trúc thư mục như sau:
	index.html
	main.js
	modules/
		helpers.js

*Bài 5-9 viết trong file main.js
Bài 5: Cho 2 mảng sau: arr1 = [1,2,4,5,6]; arr2 = [1, 6, 8, 9, 0]. Hãy lọc ra một mảng mới chứa 2 phần tử trùng nhau của 2 mảng cho bên trên. (sử dụng filter() )
Bài 6: Sử dụng map() với arr = [1,54,6,7] để tạo ra một newArr có newArr[i] = arr[i] + 5.
Bài 7: Cho array sau: m = [1,2,4,5,6,7]; n = [3,5,675,8,96]. Hãy viết một hàm, duyệt cả các mảng m và n; loại bỏ đi phần tử có giá trị bằng 1, 8,10,96,7.
Bài 8: Cho array 1 như sau: 
players = [
	{ id: 11, name: 'Messi', age: 33 },
	{ id: 12, name: 'Ronaldo', age: 34 },      
	{ id: 13, name: 'Young', age: 35 },        
	{ id: 14, name: 'Mane', age: 21 },          
	{ id: 15, name: 'Salah', age: 24 },
]
Hãy chuyển đổi nó về array có dạng sau: 
playersModified = { 
	11: {id: 11, name: "Messi", age: 33},
	12: {id: 12, name: "Ronaldo", age: 34},
	13: {id: 13, name: "Young", age: 35},
	14: {id: 14, name: "Mane", age: 21},
	15: {id: 15, name: "Salah", age: 24}
}.
		
*Các bài sau sẽ viết trong filee helpers.js dưới dạng module và import trong file main.js để sử dụng
Bài 9: Cho mảng A = [1,5,3,8,10]
+Viết chương trình JS tính giá trị trung bình của mảng.
+Viêt chương trình JS để sắp xếp 1 mảng theo thứ tự giảm dần
	Input: A = [1,5,3,8,10]
	Output: A = [10, 8, 5, 3, 1]
+Tính tổng các số dương trong mảng
+Tính tổng các số lẻ trong mảng
+Tìm số lớn thứ 2 trong mảng
	Output: 8
+Đếm các số chính phương có trong mảng
```