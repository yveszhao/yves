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
	  
	  $("div.content_block.col1").hover(
	  function() {
	    $("span.bottom_line").removeClass("active");
		$("span.bottom_line_ex").removeClass("active");
		$("span.bottom_line.bot_first").addClass("active");
      },
	  function() {
	    $("span.bottom_line.bot_first").removeClass("active");
      });
	  
	  $("div.content_block.col2").hover(
	  function() {
	    $("span.bottom_line").removeClass("active");
		$("span.bottom_line_ex").removeClass("active");
		$("span.bottom_line.bot_second").addClass("active");
      },
	  function() {
	    $("span.bottom_line.bot_second").removeClass("active");
      });
	  
	  $("div.content_block_big").hover(
	  function() {
	    $("span.bottom_line").removeClass("active");
		$("span.bottom_line_ex").addClass("active");
      },
	  function() {
	    $("span.bottom_line_ex").removeClass("active");
      });
	  
	  $("div.content_block_no").hover(
	  function() {
	    $("span.bottom_line").removeClass("active");
		$("span.bottom_line_ex").removeClass("active");
		$("span.bottom_line.bot_fourth").addClass("active");
      },
	  function() {
	    $("span.bottom_line.bot_fourth").removeClass("active");
      });
	  
      $("#userhead").hover (
	  function() {
	    $(this).addClass("active");
      },
	  function() {
	    $(this).removeClass("active");
      });
	  
	  $("div#session1").click (function(){
		window.location.href = "dns.html";
	  });
});
