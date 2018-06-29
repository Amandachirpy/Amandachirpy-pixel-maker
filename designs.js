let height, width, color, reset;
function makeGrid() {
    $("#pixelCanvas").html("");
    height = $("#inputHeight").val();
    width = $("#inputWeight").val();
        $("div").removeClass("error");
        for (let x = 0; x < height; x++) {
            $('#pixelCanvas').append('<tr></tr>');
        }
        for (let y = 0; y < width; y++) {
            $('#pixelCanvas tr').each(function () {
                $(this).append('<td></td>');
            });
        }
    
}
color = $('#colorPicker');
$(document).on("mousedown", "tr td", function () {
    let colorValue = color.val();
    $(this).css('background-color', colorValue);
    $('tr td').bind("mousemove", function () {
        let colorValue = color.val();
        $(this).css('background-color', colorValue);
    }).mouseup(function() {
        $('td').unbind('mousemove');
    });
    $('tr td').on('dblclick',function () {
        $(this).css('background-color', "#FFFFFF")
    })
});

