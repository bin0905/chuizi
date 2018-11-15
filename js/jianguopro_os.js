/**
 * Created by Bin on 2018/11/15.
 */
$("footer").load("footer.html");
$(window).scroll(function () {
    if($(this).scrollTop()==0){
        $(".header_os").hide();
        $("article").css("top","0")
    }else {
        $(".header_os").show();
        $("article").css("top","-38px")

    }
    if ($(this).scrollTop() > $(".header").height()) {
        $(".header_bottom").addClass("fixed").find(".h_b_logo").show(500);
        $(".header_os").addClass("fixed");
    } else if ($(this).scrollTop() < $(".header").height()) {
        $(".header_bottom").removeClass("fixed").find(".h_b_logo").hide(500);
        $(".header_os").removeClass("fixed");

    }
    if ($(this).scrollTop() > 1000) {
        $(".dingbu").slideDown(1000);
    } else {
        $(".dingbu").slideUp(1000);
    }
    if ($(this).scrollTop() <= $(".white").offset().top) {
        $(".header_os").css({
            "background": "#39406e",
            "color": "#ccc"
        });
        $(".tit_nav ul li a").removeClass("active");
        $(".header_bottom").removeClass(" red black  white").addClass("blue")
    }
    if ($(this).scrollTop() > $(".white").offset().top) {
        $(".header_os").css({
            "background": "#f9f9f9",
            "color": "#444"
        })
        $(".header_bottom").removeClass("blue red black").addClass("white");
        $(".tit_nav ul li a").addClass("active");
    }
    if ($(this).scrollTop()>=$(".more").offset().top) {
        $(".nav_more").addClass("active").siblings().removeClass("active");
    }else  if ($(this).scrollTop()>=$(".srf").offset().top) {
        $(".nav_srf").addClass("active").siblings().removeClass("active");
    }else  if ($(this).scrollTop()>=$(".kjzm").offset().top) {
        $(".nav_kjzm").addClass("active").siblings().removeClass("active");
    }else  if ($(this).scrollTop()>=$(".os_zd").offset().top) {
        $(".nav_zd").addClass("active").siblings().removeClass("active");
    }else {
        $(".tit_nav:first-of-type").addClass("active").siblings().removeClass("active");
    }
})
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


$(".video").click(function () {
    $(".vedio").show().find("video").get(0).play();
})
$(".vedio a").click(function () {
    $(".vedio").hide().find("video").get(0).pause();
    $("video").get(0).currentTime = 0;
})
$(".tit_nav").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
})