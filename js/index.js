/**
 * Created by Bin on 2018/11/5.
 */
$("footer").load("footer.html")
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

//var timer=null;
var num = 0;
$(".img li").eq(num).fadeIn(1500).siblings().fadeOut(1500);
setInterval(function () {
    num++;
    if (num > 1) {
        num = 0
    }
    $(".tit li").eq(num).addClass("active").siblings().removeClass("active");
    $(".img li").eq(num).fadeIn(1500).siblings().fadeOut(1500);
}, 4000);

$(".tit li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".img li").eq($(this).index()).fadeIn(1500).siblings().fadeOut(1500);
});


/*

 $.ajax({
 url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/hotshop",
 //            url:"json.txt",
 type: "get", /!*get/post*!/
 data: {
 //往后台传送数据   jsonp
 },
 async: false,
 dataType: "json",
 timeout: "10000",
 }).done(function (result) {
 var data = result.data;
 for (var i = 0; i < data.length; i++) {
 $(".hot_shop").append(`
 <li>
 <div class="h_img"><img title="${data[i].name}" src="${data[i].images}" alt=""></div>
 <div class="h_text">
 <h4>${data[i].name}</h4>
 <h6 data-hovertitle="${data[i].hovertitle}" data-title="${data[i].title}">${data[i].title}</h6>
 <p class="price" >￥${data[i].price} <span>${data[i].oldprice}</span></p>
 </div>
 <i class="${data[i].class}">${data[i].buy}</i>
 </li>
 `).find("li").hover(function () {
 var hovertit=$(this).find("h6").attr("data-hovertitle");
 if(hovertit!=""){
 $(this).find("h6").addClass("red").get(0).innerHTML=hovertit;
 }

 },function(){
 var tit=$(this).find("h6").attr("data-title");
 $(this).find("h6").removeClass("red").get(0).innerHTML=tit;
 });

 }
 });
 $.ajax({
 url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/newshop",
 //            url:"json.txt",
 type: "get", /!*get/post*!/
 data: {
 //往后台传送数据   jsonp
 },
 async: false,
 dataType: "json",
 timeout: "10000",
 }).done(function (result) {
 var data = result.data;
 for (var i = 0; i < data.length; i++) {
 $(".new_shop").append(`
 <li>
 <div class="h_img"><img title="${data[i].name}" src="${data[i].images}" alt=""></div>
 <div class="h_text">
 <h4>${data[i].name}</h4>
 <h6 data-hovertitle="${data[i].hovertitle}" data-title="${data[i].title}">${data[i].title}</h6>
 <p class="price" >￥${data[i].price} <span>${data[i].oldprice}</span></p>
 </div>
 <i class="${data[i].class}">${data[i].buy}</i>
 </li>
 `).find("li").hover(function () {
 var hovertit=$(this).find("h6").attr("data-hovertitle");
 if(hovertit!=""){
 $(this).find("h6").addClass("red").get(0).innerHTML=hovertit;
 }

 },function(){
 var tit=$(this).find("h6").attr("data-title");
 $(this).find("h6").removeClass("red").get(0).innerHTML=tit;
 });

 }
 });
 $.ajax({
 url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/phoneshop",
 //            url:"json.txt",
 type: "get", /!*get/post*!/
 data: {
 //往后台传送数据   jsonp
 },
 async: false,
 dataType: "json",
 timeout: "10000",
 }).done(function (result) {
 var data = result.data;
 for (var i = 0; i < data.length; i++) {
 $(".phone_shop").append(`
 <li>
 <div class="h_img"><img title="${data[i].name}" src="${data[i].images}" alt=""></div>
 <div class="h_text">
 <h4>${data[i].name}</h4>
 <h6 data-hovertitle="${data[i].hovertitle}" data-title="${data[i].title}">${data[i].title}</h6>
 <p class="price" >￥${data[i].price} <span>${data[i].oldprice}</span></p>
 </div>
 <i class="${data[i].class}">${data[i].buy}</i>
 </li>
 `).find("li").hover(function () {
 var hovertit=$(this).find("h6").attr("data-hovertitle");
 if(hovertit!=""){
 $(this).find("h6").addClass("red").get(0).innerHTML=hovertit;
 }

 },function(){
 var tit=$(this).find("h6").attr("data-title");
 $(this).find("h6").removeClass("red").get(0).innerHTML=tit;
 });

 }
 });
 $.ajax({
 url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/guanfang",
 //            url:"json.txt",
 type: "get", /!*get/post*!/
 data: {
 //往后台传送数据   jsonp
 },
 async: false,
 dataType: "json",
 timeout: "10000",
 }).done(function (result) {
 var data = result.data;
 for (var i = 0; i < data.length; i++) {
 $(".guanfang_shop").append(`
 <li>
 <div class="h_img"><img title="${data[i].name}" src="${data[i].images}" alt=""></div>
 <div class="h_text">
 <h4>${data[i].name}</h4>
 <h6 data-hovertitle="${data[i].hovertitle}" data-title="${data[i].title}">${data[i].title}</h6>
 <p class="price" >￥${data[i].price} <span>${data[i].oldprice}</span></p>
 </div>
 <i class="${data[i].class}">${data[i].buy}</i>
 </li>
 `).find("li").hover(function () {
 var hovertit=$(this).find("h6").attr("data-hovertitle");
 if(hovertit!=""){
 $(this).find("h6").addClass("red").get(0).innerHTML=hovertit;
 }

 },function(){
 var tit=$(this).find("h6").attr("data-title");
 $(this).find("h6").removeClass("red").get(0).innerHTML=tit;
 });

 }
 });
 $.ajax({
 url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/zhoubian",
 //            url:"json.txt",
 type: "get", /!*get/post*!/
 data: {
 //往后台传送数据   jsonp
 },
 async: false,
 dataType: "json",
 timeout: "10000",
 }).done(function (result) {
 var data = result.data;
 for (var i = 0; i < data.length; i++) {
 $(".zhoubian_shop").append(`
 <li>
 <div class="h_img"><img title="${data[i].name}" src="${data[i].images}" alt=""></div>
 <div class="h_text">
 <h4>${data[i].name}</h4>
 <h6 data-hovertitle="${data[i].hovertitle}" data-title="${data[i].title}">${data[i].title}</h6>
 <p class="price" >￥${data[i].price} <span>${data[i].oldprice}</span></p>
 </div>
 <i class="${data[i].class}">${data[i].buy}</i>
 </li>
 `).find("li").hover(function () {
 var hovertit=$(this).find("h6").attr("data-hovertitle");
 if(hovertit!=""){
 $(this).find("h6").addClass("red").get(0).innerHTML=hovertit;
 }

 },function(){
 var tit=$(this).find("h6").attr("data-title");
 $(this).find("h6").removeClass("red").get(0).innerHTML=tit;
 });

 }
 });
 */
function ajaxNew(arr) {
    for (var y = 0; y < arr.length; y++) {
        $.ajax({
            url: "https://www.easy-mock.com/mock/5beeb07628fc7826b7f1a663/smartisan/" + arr[y],
//            url:"json.txt",
            type: "get", /*get/post*/
            data: {
                //往后台传送数据   jsonp
            },
            async: false,
            dataType: "json",
            //timeout: "10000",
        }).done(function (result) {
            var data = result.data;
            for (var i = 0; i < data.length; i++) {
                $("." + arr[y] + "_shop").append(`
           <li>
                    <div class="h_img"><img title="${data[i].name}" src="${data[i].images}" alt=""></div>
                    <div class="h_text">
                        <h4>${data[i].name}</h4>
                        <h6 data-hovertitle="${data[i].hovertitle}" data-title="${data[i].title}">${data[i].title}</h6>
                        <p class="price" data-button="${data[i].button}" data-none="${data[i].none}" data-aprice="￥${data[i].price} <span class='oldprice'>${data[i].oldprice}</span>" >￥${data[i].price} <span class='oldprice'>${data[i].oldprice}</span></p>
                    </div>
                        <i class="${data[i].class}">${data[i].buy}</i>
                    </li>
         `).find("li").hover(function () {
                    var hovertit = $(this).find("h6").attr("data-hovertitle");
                    if (hovertit != "") {
                        $(this).find("h6").addClass("red").get(0).innerHTML = hovertit;
                    }
                    $(this).find(".price").html("<button class='ckxq'>查看详情</button><button class='buycar'>加入购物车</button>")
                    if ($(this).find(".price").attr("data-button") == 1) {
                        $(this).find(".price").find(".buycar").remove();
                    }
                    if ($(this).find(".price").attr("data-button") == 2) {
                        $(this).find(".price").find(".buycar").addClass("none").html("已告罄");
                    }
                }, function () {
                    var tit = $(this).find("h6").attr("data-title");
                    //var aPrice=$(this).find(".price").attr("data-aprice");
                    $(this).find("h6").removeClass("red").get(0).innerHTML = tit;
                    $(this).find(".price").get(0).innerHTML = $(this).find(".price").attr("data-aprice");
                });

            }
        });

    }
}
$(".page_left").click(function () {
    $(".hot_shop").css("left", "0")
});
$(".page_right").click(function () {
    $(".hot_shop").css("left", "-1224px")
});
var arrName = ["hot", "new", "phone", "guanfang", "peijian", "zhoubian", "jingxuan"]
ajaxNew(arrName);


