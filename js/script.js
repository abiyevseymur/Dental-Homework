//dots appears
$(document).ready(function() {
    var img = ['img/head1.jpg', 'img/head2.jpg', 'img/head3.jpg']
    $('.dotHead').click(function() {
        y = $(this).index();
        $('.headBackImg').css('background-image', 'url(' + img[y] + ')');
        $('.dotHead').removeClass('active');
        $(this).addClass('active');
    })
});
//dots position OBJECT
function Slider(className, moveName, setting = {}) {
    $(document).ready(function() {
        var width = setting.width;
        $(className).click(function(e) {
            y = $(this).index();
            x = y * width;
            $(moveName).css('right', x + 'px');
            $(className).removeClass('active');
            $(this).addClass('active');
        })
    });
}


//menu Icon
$(document).ready(function() {
    var action = 1;
    $('#menuIcon').on('click', menuIcon);

    function menuIcon() {
        if (action == 1) {
            $(this).css("left", "22%");
            $('.menuLine').css('left', '0');
            $('span i').removeClass('fa-bars').addClass('fa-times');
            action = 2;
        } else {
            $(this).css("left", "0");
            $('.menuLine').css('left', '-25%');
            $('span i').removeClass('fa-times').addClass('fa-bars');
            action = 1;
        }
        if (action == 2) {
            $('.main').click(function(e) {
                $('.menuLine').css('left', '-25%');
                $('#menuIcon').css("left", "0");
                $('span i').removeClass('fa-times').addClass('fa-bars');
                action = 1;
            });
        }
    }
});
//scrollUp
$(document).ready(function() {
    $(function() {
        $.scrollUp({
            scrollName: 'scrollUp',
            topDistance: '300',
            topSpeed: 300,
            animation: 'fade',
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>',
            activeOverlay: false,
        });
    });
});