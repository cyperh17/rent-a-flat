import $ from 'jquery';
import slick from 'slick-carousel';

let carousel = $('.carousel');

carousel.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
});