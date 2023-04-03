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
});