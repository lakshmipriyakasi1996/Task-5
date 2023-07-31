$(document).ready(function () {
    var score = 0;
    var time = 10;
    var left = Math.floor(Math.random() * 100) + 1
    var top = Math.floor(Math.random() * 100) + 1
    $("#box").css("left", left.toString() + '%');
    $("#box").css("top", top.toString() + '%');
    $("#box").click(function () { 
        var left = Math.floor(Math.random() * 100) + 1
        var top = Math.floor(Math.random() * 100) + 1
        $("#box").css("left", left.toString() + '%');
        $("#box").css("top", top.toString() + '%');
        score= score+1;
        $("h1").html("<h1> Score:" + score +"</h1>");
    });

     var value =setInterval(function()  {
        time=time-1;
        $("h2").html(time);
        if (time==0) {
            clearInterval(value); 
            $("#box").hide();
        }
    }, 1000);
});