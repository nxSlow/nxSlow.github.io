/**
 * Created by Administrator on 2017/4/23.
 */
$(document).ready(function () {
    $(".cbox").animate({
        top: '0px',
        easing:"swing",
    });
    $("#header").animate({
        top: '0px',
    });
    $('.cbox').mousemove(function () {
        $(".cbox").addClass('cbox2');
        $(this).removeClass('cbox2').addClass('cbox1');
        $(this).mouseout(function () {
            $(this).removeClass('cbox1');
            $('.cbox').removeClass('cbox2');
        })
    });
});

