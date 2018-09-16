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

// function loadData() {
//     console.log("function loadData called");
//     data = "";
//     $.getJSON('/',function(data){
//         var df = document.createDocumentFragment(document.getElementById("noteee"));
//         putQues(data,df);
//         $("#notee").append(df);
//     });
// }

// function putnotes(obj,df) {
//     obj.forEach(element => {
//         var str = document.createElement("note");
//         str.innerHTML = ' <div class="panel panel-success templatenote"><div class="panel-heading">'+ element.title +'</div><div class="panel-body">Message :: '+ element.message +'<br>'+ element.date +'</div></div>';
//         df.appendChild(str);
//     });
// }

// window.onload = loadData();
