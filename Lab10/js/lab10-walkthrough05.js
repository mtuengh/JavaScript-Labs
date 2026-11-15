$(function () {

    // Tạo phần tử ảnh mới
    var img = $(
        '<img src="images/art/thumbs/13030.jpg">'
    );

    // Chọn panel
    var panel = $('.panel');

    // Chèn ảnh ngay trước panel
    img.insertBefore(panel);

});
