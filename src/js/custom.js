/* --------------------------------------------------------------------
-----------------------------------------------------------------------
   Template Name : Satto - Responsive Personal Template
   Author : Pixygen
   Version : 1.0.0
   Created : May 2020
   File Description : Main JS file of the template
-----------------------------------------------------------------------
---------------------------------------------------------------------*/

$(document).ready(function(){

   "use strict";

   /* Navbar */
   $(".navbar-nav a, .scroll-down a, .scroll-to a").on("click", function(e) {
      e.preventDefault();
      var a = $(this);
      $("html, body").stop().animate({
         scrollTop: $(a.attr("href")).offset().top - 0
      }, 1500, "easeInOutExpo");
   });

   $(window).on("scroll", function(){
      if($(window).scrollTop() >= 50)
         $(".navbar").addClass("sticky"); 
      else
         $(".navbar").removeClass("sticky");
   });

   $(window).load(function() {
      if($(window).scrollTop() >= 50) {
         $(".navbar").addClass("sticky");
      }
   });

   $(document).on("click", ".navbar-collapse.show", function(e) {
      if($(e.target).is("a"))
         $(this).collapse("hide");
   });

   $(".navbar-nav").scrollspy({
      offset: 20
   });

   /* Preloader */ 
   $(window).load(function() {
      $('#preloader').delay(500).fadeOut('slow');
      $('.spinner').delay(250).fadeOut();
      $('body').delay(250).css({
            'overflow': 'visible'
      });
   });

   /* Back to Top */ 
   $(window).on("scroll", function() {
      if($(this).scrollTop() > 100)
         $(".back-to-top").fadeIn(); 
      else
         $(".back-to-top").fadeOut();
   });

   $(".back-to-top").click(function() {
      $("html, body").animate({
         scrollTop: 0
      }, 1000);
   });

   /* Wavify - Hero Section */ 
   if($("#img-wave").length){ 
      $("#img-wave").wavify({
         height: 100,
         bones: 15,
         amplitude: 10,
         color: "#fff",
         speed: .25
      });
   }

   /* Typed - Hero Section */ 
   $(".element").each(function() {
      var thisEl = $(this);
      thisEl.typed({
         strings: thisEl.attr("data-elements").split(","),
         typeSpeed: 100,
         backDelay: 3000
      });
   }); 

   /* Text Rotation - Hero Section */ 
   if($(".simple-text-rotate").length) {
      $(".simple-text-rotate").textrotator({
         animation: "fade",
         speed: 1500
      });
   }

   /* Isotope - Works Section */ 
   $(window).on("load", function() {
      var workFilter = $(".work-filter"),
         menuFilter = $("#menu-filter");
      workFilter.isotope({
         filter: "*",
         layoutMode: "masonry",
         animationOptions: {
            duration: 750,
            easing: "linear"
         }
      });
      menuFilter.find("a").on("click", function() {
         var dataFilter = $(this).attr("data-filter");
         menuFilter.find("a").removeClass("active");
         $(this).addClass("active");
         workFilter.isotope({
            filter: dataFilter,
            animationOptions: {
               animationDuration: 750,
               easing: "linear",
               queue: false
            }
         });
      })
   });

   /* magnificPopup - Works Section */ 
   $(".img-zoom").magnificPopup({
      type: "image",
      closeOnContentClick: true,
      mainClass: "mfp-fade",
      gallery: {
         enabled: true,
         navigateByImgClick: true,
         preload: [0, 1]
      }
   });

   /* magnificPopup -  */
   $(".video-play").magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
   });

   /* owlCarousel - Testimonials Section */ 
   $("#owl-testi").owlCarousel({
      autoPlay: 7000,
      stopOnHover: true,
      navigation: false,
      paginationSpeed: 1000, 
      goToFirstSpeed: 2000,
      singleItem: true,
      autoHeight: true
   });

   /* Youtube Video - Hero Section */ 
   if($(".youtube-bg").length) {   
      $(".youtube-bg").mb_YTPlayer();
   }

   /* Scroll Animation */ 
   AOS.init({
      easing: 'ease-in-out-sine',
      duration: 1000
   });

});