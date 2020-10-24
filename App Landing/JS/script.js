$(".frequently__block").click(function(){
	$(this).toggleClass('active', 500);
});
$(".awesome__btn").click(function(){
	$(".awesome__btn-f").toggleClass("white-col", 400);
	$(".awesome__btn-s").toggleClass("white-col", 400);
});
$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});