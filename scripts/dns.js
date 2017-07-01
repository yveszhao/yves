$(function () {
	  
	  $("a.menuLink").click (function(){
		var con = $(this).attr("ct");
		if (con != null) {
			$('#menu').slideUp("slow",function(){
				$('#' + con).fadeIn();
			});
		}
	  });
	  
	  $("a.letsback").click (function(){
		$(this).parent().fadeOut();
		$('#menu').slideDown("slow");
	  });
});
