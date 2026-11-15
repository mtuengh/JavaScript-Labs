$(function () {

    $("figure img").on("mouseover", function (e) {

        var alt = $(this).attr("alt");
        var src = $(this).attr("src");
        var newsrc = src.replace("small", "medium");

        // Tạo khung xem trước
        var preview = $('<div id="preview"></div>');
        var image = $('<img src="' + newsrc + '">');
        var caption = $('<p></p>').text(alt);

        preview.append(image);
        preview.append(caption);

        $("body").append(preview);

        // Chuyển ảnh nhỏ sang màu xám
        $(this).addClass("gray");

        // Đặt vị trí ban đầu của ảnh xem trước
        movePreview(e);

        // Hiện ảnh lớn
        $("#preview").hide().fadeIn(1000);
    });

    function removePreview() {
        $(this).removeClass("gray");
        $("#preview").remove();
    }

    function movePreview(e) {
        $("#preview")
            .css("top", (e.pageY - 10) + "px")
            .css("left", (e.pageX + 30) + "px");
    }

    $("figure img").on("mouseleave", removePreview);
    $("figure img").on("mousemove", movePreview);

});
