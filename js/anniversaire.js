
$(".element:nth-child(1)").hide();
$(".element:nth-child(2)").hide();
$(".element:nth-child(3)").hide();

$('button').on("click", function () {
    $(".element:nth-child(1)").show();
})

$(".element:nth-child(1)").on("click", function () {
    $(".element:nth-child(2)").show();
})

$(".element:nth-child(2)").on("click", function () {
    $(".element:nth-child(3)").show();
})

$(".element:nth-child(3)").on("click", function () {
    /* alert("Mongol !"); */
    $("header").hide();
    $(".container").hide();

    $("body").css('background', 'url("css/images/max-marcel_mini.jpg") top no-repeat');
    $("audio").play();
})
