let training = $("#training");

training.slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 2
});


$("#training__arrow-prev").on("click", function(event) {
    event.preventDefault();

    training.slick('slickPrev');
});

$("#training__arrow-next").on("click", function(event) {
    event.preventDefault();

    training.slick('slickNext');
});