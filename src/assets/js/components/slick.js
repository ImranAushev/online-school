let training = $("#training");

training.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    responsive: [
        {
          breakpoint: 768,
          settings: {
          slidesToShow: 2,
          centerMode: false,
          slidesToScroll: 1
          }
        },
        {
            breakpoint: 520,
            settings: {
            slidesToShow: 1,
            centerMode: false,
            slidesToScroll: 1
            }
          }
       ]
});


$("#training__arrow-prev").on("click", function(event) {
    event.preventDefault();

    training.slick('slickPrev');
});

$("#training__arrow-next").on("click", function(event) {
    event.preventDefault();

    training.slick('slickNext');
});