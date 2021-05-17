var doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);

$(window).scroll(function() {
  if ($(this).scrollTop() > 20){  
	  $('nav').addClass("msticky");
   
  }
  else{
	  $('nav').removeClass("msticky");
  
  }
});  

$(document).ready(function(){
	// Add minus icon for collapse element which is open by default
	$(".prdt_tb .collapse.show").each(function(){
		$(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
	});
	
	// Toggle plus minus icon on show hide of collapse element
	$(".prdt_tb .collapse").on('show.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
	});
});

$(".a1-2s .card-body a").each(function () {
    if ($(this)[0].href == String(window.location)) {
        $(this).addClass("on").siblings().removeClass("on");
    }
});

$(".a1-2p ul a").each(function () {
    if ($(this)[0].href == String(window.location)) {
        $(this).parent("li").addClass("on").siblings().removeClass("on");
        $(this).parent("li").prevAll('h6').addClass("act").siblings().removeClass("act");
    }
});

$(".a1-2p .c1-x a").each(function () {
    if ($(this)[0].href == String(window.location)) {
        $(this).parent('h6').addClass("act").siblings().removeClass("act");
    }
});