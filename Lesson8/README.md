1. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
x = true, y = true, z = false

x && y && z → true && true && false -> false
x && y && !z → true && true && !false -> true && true && true -> true
(x && y) || z → (true && true) || false -> true
(x && y) || !z → (true && true) || !false -> true
x && (y || z) → true && (true || false) -> true
x && !(y || z) → true && !(true || false) -> true && !true -> true && false -> false
x && (y || !z) → true && (true || !false) -> true && (true || true) -> true && true -> true
x && (!y || z) → true && (!true || false) -> true && (false || false) -> true && false -> false

2. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
name = 'AAA', age = 20, isGood = true

age + 10 = 20 + 10 = 30
age % 3 = 20 % 3 = 2
name + ' BBB' = 'AAA' + ' BBB' = 'AAA BBB'
!isGood = !true = false
name == 'aaa' && age >= 20 → 'AAA' == 'aaa' && 20 >= 20 -> false && true -> false
name != 'aaa' && isGood → 'AAA' != 'aaa' && true -> true && true -> true
!(age < 10) && !isGood → !(20 < 10) && !true -> !false && false -> true && false -> false

3. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây?  Giải thích vì sao có kết quả đó?
a = 10, b = 20, c = 30, d = '40'
a + b + c = 10 + 20 + 30 = 60
a - b / c = 10 - 20 / 30 = 10 - 0.6666666666666666 = 9.333333333333334
a - (b * c) = 10 - (20 * 30) = 10 - 600 = -550
d - (a * b) - c = '40' - (10 * 20) - 30 = Number('40') - 200 - 30 = 40 - 200 - 30 = -190
a + b + c + d = 10 + 20 + 30 + '40' = '6040'
d + a + b + c = '40' + 10 + 20 + 30 = '40102030'
d + a - b + c = '40' + 10 - 20 + 30 = '4010' - 20 + 30 = 3990 + 30 = 4020
a - b + d - c = 10 - 20 + '40' - 30 = -10 + '40' - 30 = '-1040' - 30 = -1070
d - c + a - b = '40' - 30 + 10 - 20 = 10 + 10 - 20 = 0
a * b + d * c = 10 * 20 + '40' * 30 = 200 + 1200 = 1400

4. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
x = true, y = false, z = 10

x && y → true && false = false
x && !y → true && !false = true && true = true
x && z == 10 → true && 10 == 10 = true && true = true
(x && z == 10) → (true && 10 == 10) = (true == 10) = true
!(x && z == 10) → !(true && 10 == 10) = !(true == 10) = !true = false
!(x && z == 50) → !(true && 10 == 50) !(true == false) = !false = true
x && y && z == 10 → true && false && 10 == 10 = true && false && true = false
x && !y && z == 10 → true && !false && 10 == 10 = true && true && true = true
x || y || z == 10 → true || false || 10 == 10 = true || false || true = true
(x && y) || z != 10 → (true && false) || 10 != 10 = false || false = false
!(x && z == 10) || y → !(true && 10 == 10) || false = !true || false = false

5. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
a = 1, b = '2', c = 3, d = '4'

b + d = '2' + '4' = 24
a + b + c + d = 1 + '2' + 3 + '4' = '12' + 3 + '4' = '123' + '4' = '1234' 
a - b + c - d = 1 - '2' + 3 - '4' = -1 + 3 - '4' = 2 - '4' = -2
a - b - c + d = 1 - '2' - 3 + '4' = -1 - 3 + '4' = -4 + '4' = 0
(b + d) - (a + c) = ('2' + '4') - (1 + 3) = '24' - 4 = 20
(a + b) - (c + d) = (1 + '2') - (3 + '4') = '12' - '34' = -22
a * c + b * d = 1 * 3 + '2' * '4' = 3 + 8 = 11
-b + d = -'2' + '4' = '-24'
-b - d = -'2' - '4' = -6
-(b + d) = - ('2' + '4') = -24

6. Hãy khai báo các biến và cho biết kết quả của các phép toán dưới đây? Giải thích vì sao có kết quả đó?
age = 25, isMarried = false, isRich = true

age > 25 && isMarried && isRich → 25 > 25 && false && true = false
(age <= 25 || isMarried) && isRich → (25 <= 25 || false) && true = (true || false) && true = true && true = true
(age > 10 || isRich) && isMarried → (25 > 10 || true) && false = (true || true) && false = true && false = false
!(age >= 15 && isMarried) && isRich → !(25 >= 15 && false) && true = !(true && false) && true = !false && true = true
!(age <= 20) || !(isMarried && isRich) → !(25 <= 20) || !(false && true) = !false || !false = true
(age > 8 && !isMarried) || isRich → (25 > 8 && !false) || true = (true && true) || true = true
!(age < 8 && !isMarried) || isRich → !(25 < 8 && !false) || true = !(false && true) || true = !false || true = true
(age == 8 && isMarried) || !isRich → (25 == 8 && false) || !true = (false && false) || false = false || false = false

7 Hãy cho biết kết quả phép toán và biểu thức
a = 11, b = '22', c = 33
a + b = 11 + '22' = '1122'
a - c = 11 - 33 = -22
a + b + c = 11 + '22' + 33 = '1122' + 33 = '112233'
a + c + b = 11 + 33 + '22' = '4422'
(a + b) % 3 = (11 + '22') % 3 = '1122' % 3 = 0

a * b > 50 → 11 * '22' > 50 = 242 > 50 = true
a ** b > 100 → 11 ** '22' > 100 = true
a - (b++) == 5 → 11 - ('22'++) == 5 = -14 == 5 = false
a - (++b) == 5 → 11 - (++'22') == 5 = -14 == 5 = false

8. Cho các biến sau: 
isTall = true, isMuscle = false, isHandsome = true
Hãy cho biết kết quả của các biểu thức sau:
isTall && isMuscle → true && false = false
!isHandsome → !true = false
!isTall || !isMuscle → !true || !false = false || true = true
isTall || !(isMuscle && isHandsome) → true || !(false && true) = true || !false = true
isMuscle && !(isTall || isHandsome) → false && !(true || true) = false && !true = false