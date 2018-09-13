$(document).ready(function () {
    $("#success").hide();
    $("#failure").hide();

    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

    $('#signupButton').on('click',(event) => {
        var name = $('#username').val();
        var pass = $('#password').val();
        event.preventDefault();
        event.stopPropagation();
        $.ajax({
            url: '/users/signup',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({username: name, password: pass})
        }).done((result) => {
            if(result.result == false){
                $("#success").hide();
                $("#failure").show();
                console.log("false");
            }
            else{
                $("#success").show();
                $("#failure").hide();
                console.log("true");
            }
            console.log(result);
        });
    });    
});
