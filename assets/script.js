$('document').ready(function () {
    $('button').click(function () {
        var id = $(this).attr('id')
        $.ajax({
            url: "/rate",
            data: JSON.stringify({ id: id, province: $('title').text() }),
            type: "POST",
            success: function (data) {
                $('#rate').text(data.averageRate)
            },
            error: function (e) {

            }
        })
    })
});