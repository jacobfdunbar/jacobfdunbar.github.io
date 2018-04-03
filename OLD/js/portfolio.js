$(document).ready(function() {
    var body = $("html, body");
    $("#menu-home").hide();
    $("#menu-about").hide();
    $("#menu-projects").hide(); 
    $("#subtitle").hide();
    
    $("#nameplate").hide().fadeIn(1000, function() {
        $("#subtitle").fadeIn(1000, function() {
            if ($(window).width() > 800) {
                $("#menu-home").fadeIn(500, function() {
                    $("#menu-about").fadeIn(500, function() {
                        $("#menu-projects").fadeIn(500, function() {
                            $("#scroll-text").fadeIn(500);
                        });
                    });
                });
            } else {
                $("#scroll-text").fadeIn(500);
            }
        });
    });
    var scroll = false;
    $("#menu-home").click(function() {
        if (!scroll) {
            scroll = true;
            body.stop().animate({scrollTop: 0}, 1000, 'swing', function() {
                scroll = false;
            });
        }
    });
    
    $("#menu-about").click(function() {
        if (!scroll) {
            scroll = true;
            body.stop().animate({scrollTop: $(".bg").height()}, 1000, 'swing', function() {
                scroll = false;
            });
        }
    });
    
    $("#menu-projects").click(function() {
        if (!scroll) {
            scroll = true;
            body.stop().animate({scrollTop: $(".bg").height() * 2}, 1000, 'swing', function() {
                scroll = false;
            });
        }
    });
});