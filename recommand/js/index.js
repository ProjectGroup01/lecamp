// 사진 더보기 팝업
$(function(){

    $("li div").click(function(){
        $(".modal").fadeIn();
    });

    $(".modal_content").click(function(){
        $(".modal").fadeOut();
    });

})

// X누르면 닫히기
// function onShowPhotoAction() {
//     var photoHtml = ''
//     photoHtml += '<a class="close" href="javascript:;" onclick="onHidePhotoAction()"><img src="./img/42.png" alt="닫기"></a>'
//     photoHtml += '<p class="page"></p>'
//     photoHtml += '<div class="pop-content">'
//     photoHtml += '  <ul class="photo-list">'
//       photoHtml += '    <li><img src="./img/nicola-pavean-cZPQ6RwYwho-unsplash.jpg" alt=""></li>'
//       photoHtml += '    <li><img src="./img/2023-03-02김삿갓 체험 캠핑장.png" alt=""></li>'
//       photoHtml += '    <li><img src="./img/2023-03-02파피루스캠핑장.png" alt=""></li>'
//       photoHtml += '  </ul>'
//     photoHtml += '</div>'
//     photoHtml += '<div class="arrow">'
//     photoHtml += '  <a class="prev" href="javascript:;"><i class="fa-solid fa-circle-chevron-left"></i></a>'
//     photoHtml += '  <a class="next" href="javascript:;"><i class="fa-solid fa-circle-chevron-"></i></a>'
//     photoHtml += '</div>'
//     $('#pop-place-photo').html(photoHtml);
//     $('#pop-place-photo').imgSlide();
//     $('#pop-place-photo').stop().fadeIn(300);
//   }
  
//   function onHidePhotoAction() {
//     $('#pop-place-photo').stop().fadeOut(300);
//   }









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

