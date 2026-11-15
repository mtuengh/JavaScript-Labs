var msg = $('#msgArea');

// Chọn textarea và thay đổi nội dung
msg.val("here is some new text");

// Thay đổi nội dung phần tử
$('#first').html("new Title");

// Lấy thuộc tính class
$('#msgArea').val(
    "My class is " + $('#msgArea').attr("class")
);

// Chọn tất cả button và đổi nền đỏ
var buttons = $('button');
buttons.css('background-color', 'red');

// Đổi màu nền body
var temp = $('body');
temp.css("background-color", "ivory");

// Thêm class selected
$('.center-icons').addClass('selected');
