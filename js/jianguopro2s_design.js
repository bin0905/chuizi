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
$(".top .top_cen ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
})
$(".h_b_left ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
});
$("article .banner ul li").click(function () {
    if ($(this).attr("data-bj") == "white") {
        $(".header .top ul li").css("color", "rgba(0,0,0,.4)")
    } else {
        $(".header .top ul li").css("color", "rgba(255,255,255,.4)")
    }

    $(".header .top").removeClass("red black blue white").addClass($(this).attr("data-bj"));
    $(".header_bottom").removeClass("red black blue white").addClass($(this).attr("data-bj"));
    $("article .banner").removeClass("red black blue white").addClass($(this).attr("data-bj"));
});
$(window).scroll(function () {
    if ($(this).scrollTop() > $(".header").height()) {
        $(".header_bottom").addClass("fixed").find(".h_b_logo").show(500);
    } else if ($(this).scrollTop() < $(".header").height()) {
        $(".header_bottom").removeClass("fixed").find(".h_b_logo").hide(500);
    }
    if($(this).scrollTop()>1000){
        $(".dingbu").slideDown(1000);
    }else {
        $(".dingbu").slideUp(1000);
    }
})

$(".content .ul_img li").click(function () {
    if ($(this).index() - 2 > 0 || $(this).index() - 2 < 0) {
        $(".content .ul_img").css("left", -($(this).index() - 2) * 320)
    } else if ($(this).index() - 2 == 0) {
        $(".content .ul_img").css("left", "50px")
    }
    $(".content .ul_txt li").eq($(this).index()).addClass("active").siblings().removeClass("active");
})
var num = 2;
$(".iconlr.l").click(function () {
    num--;
    if (num < 0) {
        num = 0
    }
    var img_l = $(".content .ul_img").offset().left;
    if (img_l > 290) {
        img_l = 290;
    }
    $(".content .ul_img").css("left", img_l + 320);
    $(".content .ul_txt li").eq(num).addClass("active").siblings().removeClass("active");
});

$(".iconlr.r").click(function () {
    num++;
    if (num > 4) {
        num = 4
    }
    var img_l = $(".content .ul_img").offset().left;
    if (img_l < -290) {
        img_l = -290;
    }
    $(".content .ul_img").css("left", img_l - 320);
    $(".content .ul_txt li").eq(num).addClass("active").siblings().removeClass("active");
})

var timer = null;
var target = 0; //目标位置
var leader=0;
$(".dingbu").click(function(){
    leader = $(window).scrollTop() //显示区域自身的位置
    clearInterval(timer);
    timer = setInterval(function () {
        var step = (target-leader)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader +step;
        window.scrollTo(0,leader);
        if(leader <= 0){
            clearInterval(timer);
        }
    },25);
})
