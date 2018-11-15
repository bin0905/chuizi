/**
 * Created by Bin on 2018/11/15.
 */
$("footer").load("footer.html");
$(".h_b_left ul li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
})
var blueTop = $(".header").height() + $(".header_bottom").height() + $(".white").height();
var blackTop = $(".header").height() + $(".header_bottom").height() + $(".white").height() + $(".blue").height();
$(window).scroll(function () {
    if ($(this).scrollTop() > $(".header").height()) {
        $(".header_bottom").addClass("fixed").find(".h_b_logo").show(500);
        if ($(this).scrollTop() > blueTop&&$(this).scrollTop() <blackTop) {
            $(".header_bottom").removeClass("black").addClass("blue");

        } else if ($(this).scrollTop() > blackTop) {
            $(".header_bottom").removeClass("blue").addClass("black");
        }
    } else if ($(this).scrollTop() < $(".header").height()) {
        $(".header_bottom").removeClass("fixed blue black").find(".h_b_logo").hide(500);
    }
    if($(this).scrollTop()>1000){
        $(".dingbu").slideDown(1000);
    }else {
        $(".dingbu").slideUp(1000);
    }
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
        if(leader === 0){
            clearInterval(timer);
        }
    },25);
})