var first = document.getElementById("first");

// Tạo đoạn văn mới bằng JavaScript
var text = document.createTextNode("this is programmatically created");
var p = document.createElement("p");

p.appendChild(text);
first.appendChild(p);

// Xóa một phần tử khỏi danh sách
var icons = document.getElementById("iconList");

icons.removeChild(
    document.getElementById("deleteThisOne")
);