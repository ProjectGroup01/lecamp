$(window).scroll( function(){
    $('article').each( function(i){
        
        var ele = $(this).offset().top + $(this).outerHeight()/1.5;
        var wdw = $(window).scrollTop() + $(window).height();
        
        if( wdw > ele ){
          $(this).addClass('animate');
        }else {
          $(this).removeClass('animate');
        }
    }); 
  });
  $(".search-btn").click(function (e) {
    e.preventDefault();
    $(".checklist").toggleClass("on");
  });
  
  //  $(".checklist span").click(function (e) {
  //    e.preventDefault();
  //    $(this).toggleClass("on");
  //  }); 
  let flag1 = []
  $('.group1 span').each(function(i){
    flag1[i] = true
  })
  let flag2 = []
  $('.group2 span').each(function(i){
    flag2[i] = true
  })
  let flag3 = []
  $('.group3 span').each(function(i){
    flag3[i] = true
  })
  let flag = ""
  
  $(".checklist span").on("click", function() {
    let idx = $(this).index()
    let group = $(this).parent().parent().attr('id')
  
    switch (group) {
      case 'group1' : flag = flag1 ; break;
      case 'group2' : flag = flag2 ; break;
      case 'group3' : flag = flag3 ; break;
    }
    checklist(idx, group, flag)
   });
  function checklist(idx, group, arr){
    if(arr[ idx ]){
      let ch = $(`.${group} span`).eq(idx).attr('data-check')
      $( '.chlbottom' ).append(`<p class="chk" data-group="${group}" data-idx="${idx}">${ch}<span><i class="fa-solid fa-circle-xmark"></i></span></p>`)
      arr[ idx ] = false
      
    }
  }
  $(".chlbottom").on("click", ".chk span", function() {
    let datag = $(this).parent('.chk').attr("data-group")
    let datai = $(this).parent('.chk').attr("data-idx")
    switch (datag) {
      case "group1" : flag1[datai]=true ; break;
      case "group2" : flag2[datai]=true ; break;
      case "group3" : flag3[datai]=true ; break;
    }
    $(this).parent().remove('p')
  });
  
  $("#btn1").on("click", function() {
    $(".cont2 .result").removeClass("on");
    $(".chlbottom p").remove();
  });
  $("#btn2").on("click", function() {
    $(".cont2 .result").addClass("on");
  });
  $(".cont2 .search-btn").on("click", function() {
    $(".cont2 .search-btn").toggleClass("on");
  });
  
  $("#btn2").click(function() {
  
    let searc = document.getElementById("bottom").innerText
  
    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v2/local/search/keyword.json?",
        headers: { Authorization: "KakaoAK 4e0307ee5904685328189e9fb9d630e4" },
        data: {
            query: `${searc} 캠핑장`,
            size:4,
    }
    })
    .done(function (msg) { 
        $('.result .resultbox').remove()
        $( ".result" ).append( `<div class="resultbox"> </div>` );
        $( ".resultbox" ).css("animation", "slide-in-topp 0.8s normal");
        console.log(msg);
        if(msg.documents.length <= 0){
          $( '.result .resultbox' ).append(`<div class="none"><span>검색결과가 없습니다</span><img src="../img/cont2_none.png"></div>`)
        }else {
          for (var i = 0; i < msg.documents.length; i++){
            $( '.result .resultbox' ).append( `<div class="bottomWrap"><div class="resultContents"></div><div class="contentsBottom"><h2 id="${msg.documents[i].address_name}">${msg.documents[i].place_name}</h2>
            <p id="${msg.documents[i].address_name}" class="adrs" data-num="${msg.documents[i].phone}" data-url="${msg.documents[i].place_url}" data-value="${msg.documents[i].place_name}">${msg.documents[i].address_name}</p><a href="${msg.documents[i].place_url}">상세페이지로 바로가기</a></div></div>`);
            }
        }
    });
  });
  (function($) {
  
    $( "#datepicker" ).datepicker({
      // showAnim : 'slideDown',      // p태그
      showOtherMonths: true,          
      selectOtherMonths: true,
      // changeMonth: true,
      // changeYear: true,
      // numberOfMonths: 3,
      // showButtonPanel: true,
      dateFormat:'yy-mm-dd',
      // minDate: -20, 
      // maxDate: "+1M +10D",
      yearSuffix: "년"        //달력의 년도 부분 뒤 텍스트
      ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
      ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
      ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
      ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
      ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
    });
    
    $('#datepicker').datepicker('setDate', 'today');    // input 상자에 오늘날짜 표시
  
  })(jQuery);
  
  (function($) {
  
    $( "#datepicker2" ).datepicker({
      // showAnim : 'slideDown',      // p태그
      showOtherMonths: true,          
      selectOtherMonths: true,
      // changeMonth: true,
      // changeYear: true,
      // numberOfMonths: 3,
      // showButtonPanel: true,
      dateFormat:'yy-mm-dd',
      // minDate: -20, 
      // maxDate: "+1M +10D",
      yearSuffix: "년"        //달력의 년도 부분 뒤 텍스트
      ,monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 텍스트
      ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip
      ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 텍스트
      ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
      ,showMonthAfterYear:true // 월- 년 순서가아닌 년도 - 월 순서
    });
    
    $('#datepicker2').datepicker('setDate', 'today');    // input 상자에 오늘날짜 표시
  
  })(jQuery);

  



  $(document).ready(function () { //예약 인원수 추가/감소
    $('.ticket-list .minus').bind('click', function (e) {
        var v = $(this).next().find('input');
        if (v.val() == '' || isNaN(v.val())) v.val(0);
        if (v.val() > 0) {
            v.val(v.val() - 1);
        };
        if (v.val() == 0) {
            v.addClass('zero');
            v.parent().prev().addClass('zero');
        }
    });
    $('.ticket-list .plus').bind('click', function (e) {
        var v = $(this).prev().find('input');
        if (v.val() == '' || isNaN(v.val())) v.val(0);
        v.val(parseFloat(v.val()) + 1);
        v.removeClass('zero');
        v.parent().prev().removeClass('zero');
    });
 
    $('.popwrap .btn-close, .popwrap .btn-close2').click(function (e) {
        e.preventDefault();
        parent.$.colorbox.close();
    });
 
    $('html').on('focus', 'input:not(".readonly")', function () {
        //this.value = '';
        $(this).addClass('focus');
 
        if ($(this).hasClass('zero') && $(this).hasClass('focus')) {
            /*$(this).removeClass('zero');
            $(this).parent().parent().find('.minus').removeClass('zero');*/
        }
    }).on('blur', '.ticket-list input', function () {
        if ($(this).val() == '0') {
            $(this).addClass('zero');
            $(this).parent().parent().find('.minus').addClass('zero');
        }
    });
});
function count(type)  {
    const resultElement = document.getElementById('result');
    
    let number = resultElement.innerText;
    
    if(type === 'plus') {
      number = parseInt(number) + 1;
    }else if(type === 'minus')  {
      number = parseInt(number) - 1;
    }
    
    // 결과 출력
    resultElement.innerText = number + '명';
  }


