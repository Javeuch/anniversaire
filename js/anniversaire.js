
$(".element:nth-child(1)").hide();
$(".element:nth-child(2)").hide();
$(".element:nth-child(3)").hide();

$('button').on("click", function () {
    $(".element:nth-child(1)").show();
})

$(".element:nth-child(1)").on("click", function () {
    $(".element:nth-child(2)").show();
    // Pour faire défiler vers l'élément enfant suivant:
    document.querySelector(".element:nth-child(2)").scrollIntoView();
})

$(".element:nth-child(2)").on("click", function () {
    $(".element:nth-child(3)").show();
    // Pour faire défiler vers l'élément enfant suivant:
    document.querySelector(".element:nth-child(3)").scrollIntoView();

})

$(".element:nth-child(3)").on("click", function () {
    /* alert("Mongol !"); */
    $("header").hide();
    $(".container").hide();
    document.getElementById("myAudio").play();
    $("body").css('background', 'url("css/images/yomax_mini.jpg") top no-repeat');

})
