//dots appears
$(document).ready(function () {
    var img = ['img/head1.jpg', 'img/head2.jpg', 'img/head3.jpg']
    $('.dotHead').click(function () {
        y = $(this).index();
        $('.headBackImg').css('background-image', 'url(' + img[y] + ')');
        $('.dotHead').removeClass('active');
        $(this).addClass('active');
    })
});
//dots position
$(document).ready(function () {
    var width = 500;
    $('.dot').click(function (e) {
        y = $(this).index();
        x = y * width;
        $('.moveTestimonials').css('right', x + 'px');
        $('.dot').removeClass('active');
        $(this).addClass('active');
    })
});
$(document).ready(function () {
    var width = 1170;
    $('.dotMedia').click(function (e) {
        y = $(this).index();
        x = y * width;
        $('.teamMove').css('right', x + 'px');
        $('.dotMedia').removeClass('active');
        $(this).addClass('active');
    })
});
//menu Icon
$(document).ready(function () {
    var action = 1;
    $('#menuIcon').on('click', menuIcon);

    function menuIcon() {
        if (action == 1) {
            $(this).css("left", "22%");
            $('.menuLine').css('left', '0');
            action = 2;

        } else {
            $(this).css("left", "0");
            $('.menuLine').css('left', '-25%');
            action = 1;
        }
        if (action == 2) {
            $('.main').click(function (e) {
                $('.menuLine').css('left', '-25%');
                $('#menuIcon').css("left", "0");
                action = 1;
            });
        }
    }
});
//