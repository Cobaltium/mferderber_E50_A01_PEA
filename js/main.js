$(document).ready(function() {
	var filename = window.location.hash.substring(1);
	if(filename == ""){
	$(".main-content").load("content/introduction.html #content");
} else {
	$(".main-content").load("content/" + filename +".html #content");
}

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
		animate(filename);
	});

});

function animate(filename) {
	if ($(document).width() > 1024) {
		$(".main-content").animate({
			top: '-150%'
		}, 300, function() {
			$(".main-content").load("content/" + filename + " #content");
			$(".main-content").css('display', "none");
			$(".main-content").css('top', '100%');
			$(".main-content").css('display', "inline-block");
			$(document).css('height', '100%');
			$(".main-content").animate({
				top: '0'
			}, 300, function() {
				$(document).css('height', 'auto');
				// $(".main-content").animate({
				// 	'boxShadow': "10px 10px 10px rgb(200,200,200)"
				// }, 300);
			});
		});
	} else {
		$(".main-content").load("content/" + filename + " #content");
	}
}