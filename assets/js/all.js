$(document).ready(function () {
  $("#header").load("ajax/header.html", function () {
    let isOpen = false;
    $("#mobile-nav-btn").click(function (e) {
      e.preventDefault();
      // console.log(isOpen);
      if (!isOpen) {
        $("#nav-close-btn").show();
        $("#nav-open-btn").hide();
        $("#mobile-nav").fadeIn();
        isOpen = true;
      } else if (isOpen) {
        $("#nav-close-btn").hide();
        $("#nav-open-btn").show();
        $("#mobile-nav").fadeOut();
        isOpen = false;
      }
    });
  });
  $("#footer").load("ajax/footer.html");
  $("#product").load("ajax/product.html", function () {
    $("#filter-btn").click(function (e) {
      $("#filter-menu").slideDown();
    });
    $("#sort-btn").click(function (e) {
      $("#sort-menu").slideToggle();
    });
    $(".filter-item").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("filter-item--active");
    });
  });

  $(".faq-list-item").click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass("faq-list-item--active");
    $(this).addClass("faq-list-item--active");
  });
  //元素存在焦點時
  $(".search input").on("focus", function () {
    $(this).parent().addClass("search-focus");
  });
  //元素失去焦點時
  $(".search input").on("blur", function () {
    $(this).parent().removeClass("search-focus");
  });
});

const swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
