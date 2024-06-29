// tim element theo id
const $paragraph = document.getElementById("paragraph");
console.log("$Paragraph:: ", $paragraph);

// tim elements theo ten the
const $tagP = document.getElementsByTagName("p");
console.log("$tagP: ", $tagP);

// tim elements theo class
const $text = document.getElementsByClassName("text");
console.log("$text: ", $text);

// const $paragraph = document.getElementById('paragraph');

// console.log('Đây là thẻ: ', paragraph);

// querySelector
// const $element = document.querySelector("#paragraph");
// const $element = document.querySelector(".text");

// const $element = document.querySelector("#paragraph.text");
// console.log("$element: ", $element);

// // querySelectorAll
// const $elements = document.querySelectorAll("p#paragraph.text");
// console.log("$elements: ", $elements);

const $h1 = document.getElementById("h1");
console.log("$h1: ", $h1);
// innerHTML: thay đổi nội dung html bên trong element
$h1.innerHTML = "Nội dung đã được thay đổi!";

// innerText: thay đổi nội dung văn bản bên trong element
$h1.innerText = "Nội dung đã được thay đổi";

const $tagA = document.getElementById("tagA");

// attribute: thay đổi 
// c1
$tagA.href = "https://www.google.com/";
console.log($tagA.href);

// c2
// setAttribute(attribute, value)
$tagA.setAttribute("href", "https://www.youtube.com");
console.log($tagA.getAttribute("href")); // dùng cho hầu hết các trường hợp, kể cả có thuộc tính data-src="xxx"

// Thay đổi style của 1 element
$tagA.style.color = "red";
// $tagA.style["font-size"] = "100px";
$tagA.style.fontSize = "100px";

// Xoá thuộc tính của 1 element
$tagA.removeAttribute('data-src');

// tạo mới element
let $tagH2 = document.createElement("h2");
$tagH2.innerHTML = "Noi dung the h2";
console.log($tagH2);
document.body.appendChild($tagH2);
// $tagA.remove();

// thao tác với element
$tagA.classList.toggle("test")
console.log($tagA);

// quizzes
// const $favoriteListItems = document.getElementsByClassName("favorite-list-item");
// // console.log("favoriteListItems:: ", $favoriteListItems);
// for(let item of $favoriteListItems) {
//     item.innerText = "I love this thing";
//     item.style.color = "red";
// }

// const input = prompt("Nhap ban phim");
// const parent = document.querySelector("#favorite-list");
// const node = document.createElement("li");
// const textnode = document.createTextNode(input);
// node.appendChild(textnode);
// node.style.color = "blue";
// parent.appendChild(node);


