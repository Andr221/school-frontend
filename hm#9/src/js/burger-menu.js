$(function () {
  $(".button").on("hover", function (e) {
    e.preventDefault();
    $("span").toggleClass("hovered");
  });
});
