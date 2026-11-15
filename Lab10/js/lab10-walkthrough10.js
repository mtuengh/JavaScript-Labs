$(function () {

    $(".animLoading").hide();

    $("#consume").click(function () {

        $(".animLoading").show();
        $("#results").html("<ul></ul>");

        var url =
            "http://www.randyconnolly.com/funwebdev/services/travel/cities.php";

        $.get(url)

            .done(function (data) {

                $.each(data, function (index, value) {

                    var li = $("<li></li>").text(value.name);
                    li.appendTo("div#results ul");

                });

            })

            .fail(function (xhr, status, error) {

                $("#results").text(
                    "Không thể tải dữ liệu. Status: " +
                    status + " - Error: " + error
                );

            })

            .always(function () {

                $(".animLoading").fadeOut("slow");

            });

    });

});