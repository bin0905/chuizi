/**
 * Created by Bin on 2018/11/15.
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

var last=$(".pa a").eq($(".pa a").length-2).html();
var num=0;
$(".pa a").click(function(){


    if($(this).html()=="上一页"){
        num--;
        if(num<1){
            num=1;
            return
        }
        $(".pa a").eq(num).addClass("active").siblings().removeClass("active");
    }else if($(this).html()=="下一页"){
        if(num==0){
            num++;
        }
        num++;
        if(num>last){
            num=last;
            return;
        }
        $(".pa a").eq(num).addClass("active").siblings().removeClass("active");
    }else {
        num=$(this).html();
        $(this).addClass("active").siblings().removeClass("active");
    }
    $.ajax({
        url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/hottj",
//            url:"json.txt",
        type: "get", /*get/post*/
        data: {
//往后台传送数据   jsonp
        },
        async: false,
        dataType: "json",
//timeout: "10000",
    }).done(function (result) {
        $(".hottj").html("");
        var data = result.data;
        var nums=num-1;
        if(nums<0){
            nums=0
        }
        for (var i = nums*10; i < num*10; i++) {
            $(".hottj").append(
                ` <li title="${data[i].title}">
    <div class="li_logo fl">
        <img src="${data[i].images}" alt="">
        <div class="li_logo_logo">
            <img src="${data[i].images}" alt="">
        </div>

    </div>
    <div class="li_right fl">
        <h5>${data[i].title}</h5>
        <div class="txt">
            <div class="txt_left fl">
                <div class="name fl">${data[i].name}</div>
                <div class="time fl">${data[i].time}</div>
            </div>
            <div class="txt_right fr">
                <i class="review">${data[i].review}</i>
                <i class="browse">${data[i].browse}</i>
            </div>
        </div>
    </div>
</li>`
            )

        }
    });

});
$.ajax({
    url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/jingpinzx",
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
        $(".jp").append(
            `
<li title="${data[i].title}">
    <h2 class="tit">${data[i].title}</h2>
    <div class="txt">
        <div class="txt_left fl">
            <div class="name fl">${data[i].name}</div>
            <div class="time fl">${data[i].time}</div>
        </div>
        <div class="txt_right fr">
            <i class="review">${data[i].review}</i>
            <i class="browse">${data[i].browse}</i>
        </div>
    </div>

    <div class="li_img">
        <img src="${data[i].images}" alt="">
    </div>
    <div class="text">
        <p class="describe">${data[i].describe}<a href="javascripr:;">查看全文</a></p>
    </div>
</li>
`
        )

    }
});
$.ajax({
    url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/hottj",
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
    for (var i = 0; i < 10; i++) {
        $(".hottj").append(
            ` <li title="${data[i].title}">
    <div class="li_logo fl">
        <img src="${data[i].images}" alt="">
        <div class="li_logo_logo">
            <img src="${data[i].images}" alt="">
        </div>

    </div>
    <div class="li_right fl">
        <h5>${data[i].title}</h5>
        <div class="txt">
            <div class="txt_left fl">
                <div class="name fl">${data[i].name}</div>
                <div class="time fl">${data[i].time}</div>
            </div>
            <div class="txt_right fr">
                <i class="review">${data[i].review}</i>
                <i class="browse">${data[i].browse}</i>
            </div>
        </div>
    </div>
</li>`
        )

    }
});
$.ajax({
    url: "https://www.easy-mock.com/mock/5be14891eeee54220716c03f/data/bank",
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
        $(".bank").append(`
             <li style="background: url(${data[i].images}) no-repeat 20px center" title="${data[i].title}">
                                <a href="javascript:;">${data[i].title}</a>
                            </li>
            `)

    }
});
