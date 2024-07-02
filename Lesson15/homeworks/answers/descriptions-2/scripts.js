function getUniqueElements(A1, A2) {
    // Tạo một mảng để lưu trữ các phần tử không trùng nhau
    let uniqueArray = [];
  
    // Duyệt qua mảng A1
    for (let i = 0; i < A1.length; i++) {
      // Nếu phần tử không có trong A2 thì thêm vào uniqueArray
      if (A2.indexOf(A1[i]) === -1) {
        uniqueArray.push(A1[i]);
      }
    }
  
    // Duyệt qua mảng A2
    for (let i = 0; i < A2.length; i++) {
      // Nếu phần tử không có trong A1 thì thêm vào uniqueArray
      if (A1.indexOf(A2[i]) === -1) {
        uniqueArray.push(A2[i]);
      }
    }
  
    return uniqueArray;
  }
  
  // Ví dụ sử dụng
  let A1 = [1, 2, "a"];
  let A2 = [1, 3, "b"];
  let result = getUniqueElements(A1, A2);
  
  console.log(result); // Output: [2, "a", 3, "b"]
  