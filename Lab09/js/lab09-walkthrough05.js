
// this variable has global scope
var boxClass = 'movingDiv';

function outputBox(num) {
   var box = "<div class='" + boxClass + "' id='div" + num + "'>";
   box += "This is div " + num;
   box += "</div>";
   return box;
}

window.addEventListener("load", function () {

    // Exercise 9.5: Chạy sau khi trang đã tải xong
    var divToGet = document.getElementById("div1");
    alert(divToGet.innerHTML);

    // Exercise 9.6: Xử lý sự kiện trên các DIV
    var divs = document.querySelectorAll(".movingDiv");

    for (var i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function (e) {
            alert("triggered by " + e.target.id);
        });
    }

});