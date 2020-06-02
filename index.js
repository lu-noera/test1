
$(document).ready(function(){
    $(".nav").hover(function(){},function(){
       $(".bg").css("left",parseFloat($(".active").eq(0)[0].offsetLeft)+"px");
         $(".bg").css("width",parseFloat($(".active").width())+"px");
         $(".nav ul li a").css("color","green");
         $(".active a").css("color","blue");//鼠标移出时滑回模块
    })
       $(".nav ul li").hover(function(){
         $(".bg").css("left",parseFloat($(this)[0].offsetLeft)+"px");
         $(".bg").css("width",parseFloat($(this).width())+"px");
        $(".nav ul li a").css("color","green");
         $(this).children("a").css("color","blue");//
       })
       $(".nav ul li").click(function(){
         $(this).addClass("active"),siblings().removeClass("active");
       })//点击固定模块
       
})
/*$("document").ready(function(){
    $(".active").hover(function(){
        $(".active").css("background-color","yellow");
        },function(){
        $(".active").css("background-color","pink");
      });
    });
})*/