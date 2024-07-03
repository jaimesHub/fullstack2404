/**
 * 🧑‍💻 Với cú pháp này, hãy thử tìm cách đảo giá trị 2 biến `x` và `y` 
 * mà không cần một biến phụ trong Javascript
- Input: x = 1, y = 2
- Output: x = 2, y = 1

 */

const swap = (x, y) => {
    [x, y] = [y, x];
    return { x, y };
};

export {
    swap,
}