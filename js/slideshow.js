$(document).ready(function () {
    $(".powerpoint-content-block").mouseover(function () {
        $(this).find(".slideshow").hide();
         $(this).find(".slideshowGif").show();
    });

    $(".powerpoint-content-block").mouseout(function () {
        $(this).find(".slideshow").show();
        $(this).find(".slideshowGif").hide();

    });
});
