/**
 * Created by Bin on 2018/11/16.
 */
$("footer").load("footer.html");

$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
        $(".dingbu").slideDown(1000);
    } else {
        $(".dingbu").slideUp(1000);
    };
});
var timer = null;
var target = 0; //目标位置
var leader = 0;
$(".dingbu").click(function () {
    leader = $(window).scrollTop() //显示区域自身的位置
    clearInterval(timer);
    timer = setInterval(function () {
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        window.scrollTo(0, leader);
        if (leader <= 0) {
            clearInterval(timer);
        }
    }, 25);
})



$(".goods_list ul li").click(function(){
    $(".goods_list ul").css("left",$(this).index()*(-$(this).outerWidth())+"px");
});