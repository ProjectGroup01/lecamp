// 아래 숫자 누를때마다 박스 화면전환되게 함
$(".num1").on("click",function(){
    $(".article1 .recommend1").css("display","block");
    $(".article1 .recommend2").css("display","none");
    $(".article1 .recommend3").css("display","none");
    $(".article1 .recommend4").css("display","none");
    $(".article1 .recommend5").css("display","none");
    $(".article1 .recommend6").css("display","none");
    });
$(".num2").on("click",function(){
    $(".article1 .recommend2").css("display","block");
    $(".article1 .recommend1").css("display","none");
    $(".article1 .recommend3").css("display","none");
    $(".article1 .recommend4").css("display","none");
    $(".article1 .recommend5").css("display","none");
    $(".article1 .recommend6").css("display","none");
    });
$(".num3").on("click",function(){
    $(".article1 .recommend3").css("display","block");
    $(".article1 .recommend1").css("display","none");
    $(".article1 .recommend2").css("display","none");
    $(".article1 .recommend4").css("display","none");
    $(".article1 .recommend5").css("display","none");
    $(".article1 .recommend6").css("display","none");
    });
$(".num4").on("click",function(){
    $(".article1 .recommend4").css("display","block");
    $(".article1 .recommend1").css("display","none");
    $(".article1 .recommend2").css("display","none");
    $(".article1 .recommend3").css("display","none");
    $(".article1 .recommend5").css("display","none");
    $(".article1 .recommend6").css("display","none");
    });
$(".num5").on("click",function(){
    $(".article1 .recommend5").css("display","block");
    $(".article1 .recommend1").css("display","none");
    $(".article1 .recommend2").css("display","none");
    $(".article1 .recommend3").css("display","none");
    $(".article1 .recommend4").css("display","none");
    $(".article1 .recommend6").css("display","none");
    });
$(".num6").on("click",function(){
    $(".article1 .recommend6").css("display","block");
    $(".article1 .recommend1").css("display","none");
    $(".article1 .recommend2").css("display","none");
    $(".article1 .recommend3").css("display","none");
    $(".article1 .recommend4").css("display","none");
    $(".article1 .recommend5").css("display","none");
    });