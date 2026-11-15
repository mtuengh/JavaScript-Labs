$(function () {

    $("#consume").click(function () {

        var url =
            "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $("#results").html("<ul></ul>");

        $.get(url, function (data, status) {

            if (status === "success") {

                $.each(data, function (index, value) {

                    var li = $("<li></li>").text(value.name);
                    li.appendTo("div#results ul");

                });

            }

        }).fail(function () {

            $("#results").text(
                "Không thể tải dữ liệu từ dịch vụ."
            );

        });

    });

});