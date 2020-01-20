$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top-45
  },1000)
  
 })


$(document).ready(function() {
	  $( "#carouselExampleInterval1" ).hover(
	  function() {
	  }, function() {
	  }
	);
});
