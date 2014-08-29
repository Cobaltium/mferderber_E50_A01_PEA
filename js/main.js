$(document).ready(function() {
	$(".main-content").load("content/introduction.html #content");

	$(".main-content").css('display', "block");
	$(document).css('height', '100%');
	$(".main-content").css('top', '100%');
	$(".main-content").animate({
		top: '0'
	}, 300, function() {

		$(document).css('height', 'auto');
	});
	$("ul li a").click(function(e) {

		var filename = $(this).attr('href').substring(1) + ".html";
		$(".main-content").animate({
			top: '-150%'
		}, 300, function() {
			$(".main-content").css('display', "none");
			$(".main-content").load("content/" + filename + " #content")
			$(".main-content").css('top', '100%');
			//$(".main-content").css('display', "inline-block");
			$(document).css('height', '100%');
			$(".main-content").animate({
				top: '0'
			}, 300, function() {
				$(document).css('height', 'auto');
				$(".main-content").animate({
					'boxShadow': "10px 10px 10px rgb(200,200,200)"
				}, 300, function() {

				});
			});
		});
	});

});