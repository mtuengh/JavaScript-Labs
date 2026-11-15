var btn = document.getElementById("testButton");

function simpleHandler(event) {
    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";

        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    } else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

btn.addEventListener("click", simpleHandler);

// Đổi ảnh sang màu xám khi đưa chuột vào
var img = document.getElementById("mainImage");

img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});

// Trả ảnh về bình thường khi đưa chuột ra
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});
