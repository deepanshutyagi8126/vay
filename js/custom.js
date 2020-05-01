$(document).ready(function(){
    $(".whiteBtn").click(function(){
        $(".header,.fixedheader").css('z-index','9');
    });
});




$(window).scroll(function () {
   
  if ($(window).scrollTop() >= 1) {
      $('.header').addClass('fixedHeader');
       $(".header,.fixedheader").css('z-index','99');
  } else {
      $('.header').removeClass('fixedHeader');
  }
});



$(document).ready(function(){
  $('.navbar-toggler').click(function(){
      if($(this).hasClass('active'))
      {
          $(this).removeClass('active')
      }
      else{
          $(this).addClass('active')
      }
  });
});



$('.navbar-toggler').click(function () {
  if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
    $('.navbar-expand-md .navbar-collapse#nav').css({"width" :"0", "height" : "0"});
  } else {
        
         $('.navbar-expand-md .navbar-collapse#nav').css({"width" :"100%", "height" : "100%"});
  }
});


$(document).ready(function(){
  $('#morphing').click(function(){
    $(this).parents('.morphing-btn-wrap').find('a.btns').css('box-shadow','none');
  })
})
$.fn.fancyMorph = function( opts ) {

  var Morphing = function( $btn, opts ) {
    var self = this;

    self.opts = $.extend({
      animationEffect : false,
      infobar    : false,
      buttons    : ['close'],
      smallBtn   : false,
      touch      : false,
      baseClass  : 'fancybox-morphing',
      afterClose : function() {
        self.close();
      }
    }, opts);

    self.init( $btn );
  };

  Morphing.prototype.init = function( $btn ) {
    var self = this;

    self.$btn = $btn.addClass('morphing-btn');

    self.$clone = $('<div class="morphing-btn-clone" />')
      .hide()
      .insertAfter( $btn );

    // Add wrapping element and set initial width used for positioning
    $btn.wrap( '<span class="morphing-btn-wrap"></span>' ).on('click', function(e) {
      e.preventDefault();

      self.start();
    });

  };

  Morphing.prototype.start = function() {
    var self = this;

    if ( self.$btn.hasClass('morphing-btn_circle') ) {
      return;
    }

    // Set initial width, because it is not possible to start CSS transition from "auto"
    self.$btn.width( self.$btn.width() ).parent().width( self.$btn.outerWidth() );

    self.$btn.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {

      if ( e.originalEvent.propertyName === 'width' ) {
        self.$btn.off('.fm');

        self.animateBg();
      }

    }).addClass('morphing-btn_circle');

  };

  Morphing.prototype.animateBg = function() {
    var self = this;

    self.scaleBg();

    self.$clone.show();

    // Trigger repaint
    self.$clone[0].offsetHeight;

    self.$clone.off('.fm').on("transitionend.fm webkitTransitionEnd.fm oTransitionEnd.fm MSTransitionEnd.fm", function(e) {
      self.$clone.off('.fm');

      self.complete();

    }).addClass('morphing-btn-clone_visible');
  };

  Morphing.prototype.scaleBg = function() {
    var self = this;

    var $clone = self.$clone;
    var scale  = self.getScale();
    var $btn   = self.$btn;
    var pos    = $btn.offset();

    $clone.css({
      top       : pos.top  + $btn.outerHeight() * 0.5 - ( $btn.outerHeight() * scale * 0.5 ) - $(window).scrollTop(),
      left      : pos.left + $btn.outerWidth()  * 0.5 - ( $btn.outerWidth()  * scale * 0.5 ) - $(window).scrollLeft(),
      width     : $btn.outerWidth()  * scale,
      height    : $btn.outerHeight() * scale,
      transform : 'scale(' + ( 1 / scale ) + ')'
    });
  };

  Morphing.prototype.getScale = function() {
    var $btn    = this.$btn,
        radius  = $btn.outerWidth() * 0.5,
        left    = $btn.offset().left + radius - $(window).scrollLeft(),
        top     = $btn.offset().top  + radius - $(window).scrollTop(),
        windowW = $(window).width(),
        windowH = $(window).height();

    var maxDistHor  = ( left > windowW / 2 ) ? left : ( windowW - left ),
        maxDistVert = ( top > windowH / 2 )  ? top  : ( windowH - top );

    return Math.ceil(Math.sqrt( Math.pow( maxDistHor, 2 ) + Math.pow( maxDistVert, 2 ) ) / radius );
  };

  Morphing.prototype.complete = function() {
    var self = this;
    var $btn = self.$btn;

    $.fancybox.open({ src : $btn.data('src') || $btn.attr('href') }, self.opts);

    $(window).on('resize.fm', function() {
      //self.scaleBg();
    });
  };

  Morphing.prototype.close = function() {
    var self   = this;
    var $clone = self.$clone;

    self.scaleBg();

    $clone.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
      $clone.hide();

      self.$btn.removeClass('morphing-btn_circle');
    });

    $clone.removeClass('morphing-btn-clone_visible');

    $(window).off('resize.fm');
  };

  // Init
  this.each(function() {
    var $this = $(this);

    if ( !$this.data("morphing") ) {
      $this.data( "morphing", new Morphing( $this, opts ) );
    }

  });

  return this;
};


// Step 2: Start using it!
// =======================

$("[data-morphing]").fancyMorph({
  hash : 'morphing'
});

//Bonus Button Position Change
if ($(window).width() <= 767) {
    $('.info').insertAfter($('.bonus'));
}
//Bonus Button Position Change End


$().ready(function(){
  $('.slick-carousel').slick({
         autoplay: true,
         speed: 1500,
    autoplaySpeed:1500,
    arrows: false,
    dots: false,
    slidesToShow: 4,
      slidesToScroll:1,
    cssEase: 'linear',
    centerMode: true,
    infinite: true,
  adaptiveHeight: false,
       focusOnSelect: true,
      responsive: [{
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            centerPadding: "120px",
        },
    },
    {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                 centerPadding: "0px",
            }
        }, 
        {
            breakpoint: 435,
            settings: {
         speed: 1500,
    autoplaySpeed:1500,
      arrows: false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1
                
            }
        }, 
    ]
  });
});


function parallax_height() {
  var scroll_top = $(this).scrollTop();
  var sample_section_top = $(".sample-section").offset().top;
  var header_height = $(".sample-header-section").outerHeight();
  $(".sample-section").css({ "margin-top": header_height });
  $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function() {
  parallax_height();
});
$(window).resize(function() {
  parallax_height();
});


//$(document).ready(function(){
//    
//    $(".whiteBtn").click(function(){
//        $(".whiteBtn").addClass("circleBtn");
//    });
//});
$(document).ready(function(){
    $(".dropdowntoggle").click(function(){
        $(".dropOpen").slideDown(5000);
    });
});
