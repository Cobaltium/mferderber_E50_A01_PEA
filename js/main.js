$(document).ready(function(){
   	$(".main-content").load("content/introduction.html #content");

	$(".main-content").css('display', "inline-block");
	$(document).css('height', '100%');
	$(".main-content").css('top', '200%');
	$(".main-content").animate({
		top: '0'
	}, 300, function(){

	$(document).css('height', 'auto');
	});
$("ul li a").click(function (e){
	// $( ".main-content" ).animate({
 //    opacity: 1,
 //    top: "-500"
 //  }, 1000, function() {
 //    // Animation complete.
 //  });
	var filename = $(this).attr('href').substring(1) + ".html";
	$(".main-content").animate({
        top: '-150%'
    }, 300, function() {
	$(".main-content").css('display', "none");
    	$(".main-content").load("content/" + filename + " #content")
    	$(".main-content").css('top', '200%');
		$(".main-content").css('display', "inline-block");
	$(document).css('height', '100%');
    	$(".main-content").animate({
    		top: '0'
    	}, 300, function(){

	$(document).css('height', 'auto');
    	});
    });
});

});