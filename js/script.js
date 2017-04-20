$(document).ready(function(){
    var img = ['img/head1.jpg','img/head2.jpg','img/head3.jpg']
    $('.dotHead').click(function(){
        y=$(this).index();
        $('.headBackImg').css('background-image','url('+img[y]+')');
        $('.dotHead').removeClass('active');
        $(this).addClass('active');
    })
});
$(document).ready(function(){
    $('.dot').click(function(){
        y=$(this).index();
        $('.moveTestimonials').css('left','400px');
        $('.dot').removeClass('active');
        $(this).addClass('active');
    })
})
