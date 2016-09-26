$(document).ready(function(){

    var width = $('#slider-wrapper').width();

    var $slides = $('.slides');

    $slides.find('li').width(width);
    $slides.width(width*$slides.find('li').length);

    $slides.css('left', -width);

    $slides.find('li:last-child').prependTo($slides);

    function nextSlide(){
        $slides.animate({
            'margin-left': -width
        }, 500, function(){
            $slides.find('li:first-child').appendTo($slides);
            $slides.css('margin-left', 0);
        });
    }

    function prevSlide(){
        $slides.animate({
            'margin-left': width
        }, 500, function(){
            $slides.find('li:last-child').prependTo($slides);
            $slides.css('margin-left', 0);
        });
    }

    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
});
