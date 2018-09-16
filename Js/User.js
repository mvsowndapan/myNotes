$(document).ready(function () {
    $("#added").hide();
    $("#notadded").hide();
    $("#sended").hide();
    $("#notsended").hide();

    $("#addnote").on('click', (event) => {
        var name = $('#title').val();
        var mes = $('#mess').val();
        var dat = $('#date').val();
        event.preventDefault();
        event.stopPropagation();
        $.ajax({
            url: '/addsentnoteRouter/addnotes',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ title: name, message: mes, date: dat })
        }).done((result) => {
            if (result.result == false) {
                $("#added").hide();
                $("#notadded").show();
                console.log("false");
            }
            else {
                $("#added").show();
                $("#notadded").hide();
                console.log("true");
            }
            console.log(result);
        });
    });
});