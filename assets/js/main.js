$(document).ready(function () {
  let nav = document.querySelector(".hearder_wrapper");
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("fixed-top");
    } else {
      nav.classList.remove("fixed-top");
    }
  };

  //Animation js
  /* AOS.init({
        offset: 200,
        duration: 1000,
    });
    */

  ///-----------------banner slider is here

  $(".products-slider, .products-slider-2").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: false,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 4,
    prevArrow: $(""),
    nextArrow: $(""),
    responsive: [
      {
        breakpoint: 908,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".cart-product-box-slider, .cart-product-box-slider-2").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 908,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".story-slid").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: false,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 0,
    prevArrow: $(""),
    nextArrow: $(""),
    responsive: [
      {
        breakpoint: 650,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  });
});
