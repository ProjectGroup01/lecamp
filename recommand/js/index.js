$(function(){
	
	
	var ht = $(window).height();	
	$("section").height(ht);
	
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	
		$("section").on("mousewheel",function(event,delta){    
			
          if (delta > 0) {  
             var prev = $(this).prev().offset().top;
			 $("html,body").stop().animate({"scrollTop":prev},1400,"easeOutQuint");
			  
          }else if (delta < 0) {  
			 var next = $(this).next().offset().top;
			 $("html,body").stop().animate({"scrollTop":next},1400,"easeOutQuint");                                         
          }
          
     });

     $('.slide-group').slick({
        autoplay:true,
        autoplaySpeed:3000,
        arrows:true,
        dots:true,
        fade:true,
        prevArrow:'<button class="slick-arrow slick-prev"><i class="fa-solid fa-angles-left"></i></button>',
        nextArrow:'<button class="slick-arrow slick-next"><i class="fa-solid fa-angles-right"></i></button>',
    
    })
    $(".slideright").on("click", function() {
        $(".detailwrap").addClass("on");
      });
      $(".detailwrap i").on("click", function() {
        $(".detailwrap").removeClass("on");
      });
       // 헤더 scroll
  $(window).scroll(function () {
    var num = $(this).scrollTop();
    if (num > 10) {
      $("#header").addClass("on");
      $("#header").css('display', 'none');
    } else {
      $("#header").removeClass("on");
      $("#header").css('display', 'block');
    }
  });

  // 햄버거버튼에 호버했을때 헤더 열림
  $(".hamburger-button").mouseenter(function () {
    $(this).siblings('#header').addClass('on')
  });

  $(".hamburger-button").mouseleave(function () {
    $(this).siblings('#header').removeClass('on')
  });
  // 햄버거버튼 열기 닫기
  $(".hamburger-button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".m_menu").toggleClass("visible");
  });
});
