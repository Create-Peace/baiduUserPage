// 顶部天气列表的
$(function() {
    // 天气和用户登录、更多栏的显示隐藏
    showHide(".weather", ".weather-panel");
    showHide(".username", ".usermenu");
    showHide(".set", ".userset");
    showHide(".more", ".morelist");
    //隐藏滚动条
    $('.morelist').mouseover(function(){
        // $(window).scroll(function(){
        // $(window).scrollTop(0);
        // });
        $('body').css('overflow',"hidden");
    });
    // 离开时开启滚动条
    $('.morelist').mouseout(function(){
        // $ (window).unbind ('scroll');
        $('body').css('overflow','auto');
    });
    //返回顶部
    $('.scrolltop').click(function(e) {
        e.preventDefault();
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        $(this).fadeOut("slow");
            oSearch.removeClass('fixed');
            // return false;
    });
    var oHeight = $('#search img').height(); //获取logo的高度
    var oSearch = $('.searchcontent');//获取顶部元素
    // 按钮的显示与隐藏
    $(document.body).on("mousewheel DOMMouseScroll", function() {
        var top = $(document).scrollTop(); //滚动条的高度
        $('.scrolltop').show();
       $('.skin').slideUp('fast');
        if (top === 0) {
            $('.scrolltop').hide();
        }
        if(top >= oHeight) {
            oSearch.addClass('fixed');
           }else{
            oSearch.removeClass('fixed');
           }
    });
    // 导航区域的显示与隐藏
    $(".newsnav li").click(function() {
        $(".newsnav li").eq($(this).index()).addClass("active").siblings().removeClass('active');
        $("#content>div").hide().eq($(this).index()).show();
    });
    // 打开换肤
    $('.changeskin').click(function(e) {
        e.stopPropagation();
        $('.skin').slideDown('fast');
    });

    // 换肤
    $('.skin .skin1').click(function(e) {
        e.stopPropagation();
        $.cookie('newskin',"skin1");
        $("body").addClass('skin1');
        $('.logo img').attr('src','image/skin/logo_white.png');
        // 存储换肤
        $.cookie("newlogo",$('.logo img')[0].src);
    });

        $("body").addClass($.cookie('newskin'));
        $('.logo img').attr('src',$.cookie('newlogo'));

    // 收起换肤窗口
    $('.put').click(function(e){
        e.stopPropagation();
       $('.skin').slideUp('fast');
    });
    $(document.body).click(function(){
       $('.skin').slideUp('fast');
   })
});



// 封装菜单的显示隐藏功能
function showHide(parent, obj) {
    var timer = 0;
    var oParent = $(parent);
    var obj = $(obj);
    oParent.mouseover(function() {
        obj.css("display", "block");

        clearTimeout(timer);
    });
    oParent.mouseout(function() {
        timer = setTimeout(function() {
            // console.log(1);
            obj.css("display", "none");
        }, 100);
    });
    obj.mouseover(function() {
        clearTimeout(timer);
        $(this).css("display", "block");
    });
    obj.mouseout(function() {
        var This = $(this);
        timer = setTimeout(function() {
            // console.log(1);
            This.css("display", "none");
        }, 100);
    });
}

