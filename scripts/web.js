$(function () {

      $("#slider").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 500,
        maxwidth: 800,
        namespace: "centered-btns"
      });

      $("a.menulink").hover(
	  function() {
	    $("span.menu_item").removeClass("active");
		$(this).parent().addClass("active");
      },
	  function() {
	    $("span.menu_item").removeClass("active");
      });
      
});
