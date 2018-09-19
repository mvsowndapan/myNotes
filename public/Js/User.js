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
                setTimeout(()=>{
                   $("#notadded").hide();
                },2000);
            }
            else {
                $("#added").show();
                $("#notadded").hide();
                setTimeout(()=>{
                   $("#added").hide();
                },2000);
                console.log("true");
                $("#allnotes").append(" <center><div class=\"panel panel-success templatenote\"><div class=\"panel-heading\">"+ name+"</div><div class=\"panel-body\">"+mes+"<br><hr class =\"style14\"/>"+dat+"</div></div></center>");
               }
            console.log(result);
        });
    });

    $.getJSON("/users/one",(data) => {
        $("#welcome").html("Welcome " + data.welcome);
    });

    $.getJSON("/addsentnoteRouter/allnotes",(data) => {
        console.log(data.notes);
        for(var i =0;i<data.notes.length;i++){
        $("#allnotes").append(" <center><div class=\"panel panel-success templatenote\"><div class=\"panel-heading\">"+ data.notes[i].title +"</div><div class=\"panel-body\">"+data.notes[i].message+"<br><hr class =\"style14\"/>"+data.notes[i].date+"</div></div></center>");
        }
    });
    // $.getJSON("/addsentnoteRouter/allnotes",(data) => {
    // console.log(data);
    // //   console.log(data.notes.length);
    //   for(var i=0;i<4;i++){
    //       console.log(data.notes[i].title);
    //       $("#t").html(data.notes[i].title);
    //       $("#m").html(data.notes[i].message);
    //       $("#d").html(data.notes[i].date);
    //   }
      

    // });
});

