var msg = document.getElementById("msgArea");
msg.value = "here is some text";

// Thay đổi tiêu đề
document.getElementById("pageTitle").innerHTML = "Even newer title";

// Lấy nội dung và thuộc tính
msg.value = document.getElementById("first").innerText;
console.log("Class:", msg.getAttribute("class"));

// Chọn phần tử theo tên thẻ
var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

// Chọn các thẻ span
elem = document.getElementsByTagName("span");
for (var i = 0; i < elem.length; i++) {
    msg.value += "\n" + elem[i].innerText;
}

// Chọn phần tử theo class
var counts = document.getElementsByClassName("count-number");
msg.value = "";
for (var i = 0; i < counts.length; i++) {
    msg.value += "\n" + counts[i].innerText;
}

// Chọn phần tử bằng CSS Selector
var ps = document.querySelector("#first p");
msg.value = ps.innerHTML;

var paragraphs = document.querySelectorAll("#first p");
for (var i = 0; i < paragraphs.length; i++) {
    msg.value += paragraphs[i].innerHTML + "\n";
}

// Ẩn textarea
msg.setAttribute("class", "hidden");

// Đổi màu nền
document.getElementById("features").style.backgroundColor = "green";