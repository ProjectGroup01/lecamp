$(window).on("load", function () {
  //리사이즈
  var deviceSize = 1024;
  function scrollOX(status) {
    $("html").css({
      overflowY: status,
    });
    return $("html").width();
  }
  var scX = scrollOX("hidden");
  var scO = scrollOX("scroll");
  var scD = scX - scO;
  if (scD > 0) {
    deviceSize = deviceSize - scD;
  }
  var ww = $(window).width();
  if (ww > deviceSize) {
    $("html").addClass("pc");
  } else {
    $("html").addClass("mobile");
  }
  $(window).on("resize", function () {
    let ww = $(window).width();
    if (ww > deviceSize && !$("html").hasClass("pc")) {
      $("html").addClass("pc").removeClass("mobile");
      location.reload();
    } else if (ww <= deviceSize && !$("html").hasClass("mobile")) {
      $("html").addClass("mobile").removeClass("pc");
      location.reload();
    }
  });

  // 헤더 scroll
  $(window).scroll(function () {
    var num = $(this).scrollTop();
    if (num > 10) {
      $("#header").addClass("on");
    } else {
      $("#header").removeClass("on");
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

$("#btn2").on("click", function() {
  $(".cont2 .result").addClass("on");
});
$("#btn1").on("click", function() {
  $(".cont2 .result").removeClass("on");
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
      $( ".resultbox" ).css("animation", "fadeInDown 0.6s alternate");
      console.log(msg);
      if(msg.documents.length <= 0){
        $( '.result .resultbox' ).append(`<h2>검색결과가 없습니다.</h2>`)
      }else {
        for (var i = 0; i < msg.documents.length; i++){
          $( '.result .resultbox' ).append( `<div class="resultContents"><h2 id="${msg.documents[i].address_name}">${msg.documents[i].place_name}</h2>
              <p id="${msg.documents[i].address_name}" class="adrs" data-num="${msg.documents[i].phone}" data-url="${msg.documents[i].place_url}" data-value="${msg.documents[i].place_name}">주소 : ${msg.documents[i].address_name}</p></div>`);
          }
      }
  });
});
