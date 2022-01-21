$(document).ready(function () {
    $('.mn-header__burger').click(function(event) {
        $('.mn-header__burger, .mn-header__block_menu').toggleClass('active');
    });

    $('.mn-header__btn').click(function(event) {
        $('.mn-header__btn, .mn-header__mac_list').toggleClass('active');
    })
})