$(function () {
  $(".nav-opener").on("click", function (e) {
    e.preventDefault();
    $("body").toggleClass("nav-active");
    $("body").toggleClass("lock");
  });
});
