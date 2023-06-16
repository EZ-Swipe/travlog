$(function() {

   $("[data-slider]").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      customPaging: function (slider, i) {
         return '<button class="dot"></button>';
      },
   });

   var header = $('#header'),
      headerH = $('#header').innerHeight(),
      scrollOffset = $(window).scrollTop();

   /* Fixed Header */
   checkScroll(scrollOffset);

   $(window).on("scroll", function () {
      scrollOffset = $(this).scrollTop();
      checkScroll(scrollOffset);
   });

   function checkScroll(scrollOffset) {
      if (scrollOffset >= headerH) {
         header.addClass('fixed');
      } else {
         header.removeClass('fixed');
      }
   }

   $('#header__burger').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('active');
      $('#nav').toggleClass('active');
   })

   // Collapse

   $("[data-collapse]").on("click", function(e) {
      e.preventDefault();
      const $this = $(this),
          blockId = $this.data("collapse");

      if ($(window).width() <= 620) {
         $(blockId).slideToggle();
         $this.find('.footer-arrow').toggleClass('active');
      }
   })
});


new Swiper('.destination', {
   slidesPerView: 1,
   slidesPerGroup: 1,
   speed: 500,
   spaceBetween: 32,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   breakpoints: {
      500: {
         slidesPerView: 2,
         slidesPerGroup: 2,
      },
      768: {
         slidesPerView: 3,
         slidesPerGroup: 3,
      }
   }
});

new WOW().init();