$( document ).ready(function() {
    console.log( "ready!" );

    var code = ["E","n","e","r","g","e","t","i","c"," a","n","d"," c","r","a","f","t","y,"," g","o","o","f","y"," b","u","t"," c","u","n","n","i","n","g"];
    var sentence = '';
    var index = 0;
    // var subsentence = "Hi, I am Nik from Slovenia and I love to experiment with just anything!";
    // var subsubsentence ="Click here if you can";
    var intervalId = setInterval(codein, 150);

    console.log("text length = " + code.length);
    $('#ag').hide();
    $('#arrowdown p').hide();
    function codein(){
      console.log("index = " + index);
      sentence += code[index];
      $('#bg h1').text(sentence);
      index++;
      if (index == code.length) {
      $('#ag').fadeIn(1000);
      $('#arrowdown p').fadeIn(3000);
      clearInterval(intervalId);
      }
    }

    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

// Scrolling animations

    $(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }

  revealOnScroll();
});

});
