// ==================== JavaScript ===================





// -------------------- JQuery -----------------------

$(document).ready(function(){
    // example 1
    $("#hide").on("click", function(){
        $("#htext").hide();
    });

    // example 2
    $("#show").on("click", function(){
        $("#stext").text("ভেরি ইম্পরটেন্ট ইলেকশন.. সো গাইজ বিকেয়ারফুল ..!").show();
        $("#stext").css("color", "red");
        let audio = new Audio("media/election.mp3");
        audio.play().catch(function(error) {
            console.log("Audio playback failed: ", error);
        });
    });

    // example 3
    $("#tshow").on("click", function(){
        $("#tstext").text("অনেক চেষ্টা করলাম নিজেকে লুকাই রাখার... কিন্তু আপনে তো দেখি মিয়া নাছোড়বান্দা...! ").show(2000);
    });
    
    // example 4
    $("#thide").on("click", function(){
        $("#thtext").hide(1000);
    });

    // example 5
    $("#animation").on("click", function(){
        $("#box").animate({
            margin: '10px 0 0 150px',
            height: '150px',
            width: '150px'
        });
    });

    // example 6
    $("#flip").on("click", function(){
        $("#panel").slideDown(5000);
    });
    $("#stop").on("click", function(){
        $("#panel").stop();
    }); 

    // example 7
    $("#alert").on("click", function(){
        alert("দয়া করে আপনি উত্তেজিত হবেন না...!");
    }); 

    // example 8
    $("#chain").on("click", function(){
        $("#chaintext").css("color", "black")
        .slideUp(2000).slideDown(2000);
    });

    // example 9
    $("#textView").on("click", function(){
        alert("Text: "+ $("#test").text());
    });
    $("#htmlView").on("click", function(){
        alert("HTML: "+ $("#test").html());
    });

    // example 10
    $("#number").on("click", function(){
        let randomNumber = Math.floor(Math.random() * 10 + 1);
        $("#numberList").append(`<li>${randomNumber}</li>`);
    });

    // example 11
    $("#classChange").on("click", function(){
        $("#classChange").removeClass("btn btn-dark").addClass("btn btn-primary !important");
    });

    // example 12
    $("#fontColor").on("click", function(){
        $("#font").css("color", "blue");
    });



});