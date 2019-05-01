import $ from 'jquery';

let nav = $('nav');

$('li', nav).click(function (e) {
    e.preventDefault();

    let li = $(this);
    let anchor = li.data('anchor');

    $('li', nav).each(function(indx, el) {
        $(el).removeClass('active');
    });

    li.addClass('active');

    /*document.querySelector(anchor).scrollIntoView({
        behavior: 'smooth'
    });*/

    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 500);
});