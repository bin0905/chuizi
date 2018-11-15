/**
 * Created by Bin on 2018/11/15.
 */
$("footer").load("footer.html");
var flag = false;
$("header nav>ul").mouseleave(function () {
    flag = false;
});
$("header nav>ul>li").eq(6).prevAll().hover(function () {
    if (!flag) {
        flag = true;
        $(this).find(".layer").slideDown(600, "bounceOut");
        $(this).find(".layer").show().end().siblings().find(".layer").hide();
    } else if (flag) {
        $(".layer").hide();
        $(this).find(".layer").show();
    }

}, function () {
    //$(this).find(".layer").slideUp();
    $(".layer").slideUp(1000)

});

var num = 0;
var timer;
timer = setInterval(function () {
    num++;
    if (num > 2) {
        num = 0
    }
    $(".ban_img ul li").eq(num).fadeIn(1000).siblings().fadeOut(1000);
    $(".ban_index ul li").eq(num).addClass("active").siblings().removeClass("active");
}, 4000);
$(".ban_index ul li").click(function () {
    $(".ban_img ul li").eq($(this).index()).fadeIn(1000).siblings().fadeOut(1000);
    $(this).addClass("active").siblings().removeClass("active");
})
$(".ban_img ul li").hover(function () {
    clearInterval(timer);
}, function () {
    timer= setInterval(function () {
        num++;
        if (num > 2) {
            num = 0
        }
        $(".ban_img ul li").eq(num).fadeIn(1000).siblings().fadeOut(1000);
        $(".ban_index ul li").eq(num).addClass("active").siblings().removeClass("active");
    }, 4000);
});


$(window).scroll(function () {
    if($(this).scrollTop()>1000){
        $(".dingbu").slideDown(1000);
    }else {
        $(".dingbu").slideUp(1000);
    }
})
var timer2 = null;
var target = 0; //目标位置
var leader=0;
$(".dingbu").click(function(){
    leader = $(window).scrollTop() ;//显示区域自身的位置
    clearInterval(timer2);
    timer2 = setInterval(function () {
        var step = (target-leader)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader +step;
        window.scrollTo(0,leader);
        if(leader <= 0){
            clearInterval(timer2);
        }
        console.log(leader);
    },25);
})