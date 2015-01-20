$(document).ready(function() {
  var filename = window.location.hash.substring(1);

  $('.main-content').css('display', 'none');
  loadPage(filename);

  $("ul li a").click(function(e) {

    var filename = $(this).attr('href').substring(1);
    loadPage(filename);
  });

});

function loadContent() {
  if (isDesktop()) {
    animate();
  } else {
    $('.main-content').css('display', 'block');
    $('.main-content').html($('#newContent').html());

  }
}
function loadPage(filename){

  if (filename == "") {
    filename = "introduction";
  }
   $.ajax({
            url: "content/" + filename + ".html",
            type: "GET",
            crossDomain: true,
            success: function (response) {
              var content = $(response)[1];
                $("#newContent").html(content.innerHTML);
                loadContent();
                document.title = "Program Exit Assesment - " + $(content).find('h2')[0].innerHTML;
            },
            error: function (xhr, status) {
              console.log( "Triggered ajaxError handler." );
            }
        });
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
