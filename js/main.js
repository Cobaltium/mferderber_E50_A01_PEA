$(document).ready(function() {
	var filename = window.location.hash.substring(1);

	$('.main-content').css('display', 'none');

	if (filename == "") {
		$("#newContent").load("content/introduction.html #content", null, loadContent);
	} else {
		$("#newContent").load("content/" + filename + ".html #content",null, loadContent);
	}

	$("ul li a").click(function(e) {

		var filename = $(this).attr('href').substring(1) + ".html";
		$("#newContent").load("content/" + filename + " #content", null, loadContent);
	});

});

function loadContent() {
	if (isDesktop()) {
		animate();
	} else {
		$('.main-content').css('display', 'block');
		$('.main-content').html($('#newContent').html());

	}
	$('body').css('height', '100%');
	$('.container').css('height', '100%');
	$('.content').css('height', '95%');
}

function isDesktop() {

	if ($(document).width() > 1024) {
		return true;
	} else {
		return false;
	}
}

function animate() {
	$(".main-content").animate({
		top: '-150%'
	}, 300, function() {
		$('.main-content').css('display', 'none');
		$('.main-content').html($('#newContent').html());
		$('.main-content').css('top', '100%');
		$('.main-content').css('display', "inline-block");
		scrollPaneBack();
	});
}

function scrollPaneBack() {
	$(document).css('height', '100%');
	$(".main-content").animate({
		top: '0'
	}, 300, function() {
		$(document).css('height', 'auto');
	});
}