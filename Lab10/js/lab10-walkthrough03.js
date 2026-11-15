$(function () {

    // Chọn ô password và đổi nền vàng
    $(':password').css('background-color', 'yellow');

    // Chọn mỗi phần tử con thứ 4 trong form
    $('form :nth-child(4n)')
        .css('background-color', 'yellow');

    // Chọn label có chứa chữ "word"
    $('label:contains("word")')
        .css('color', 'black');

});
