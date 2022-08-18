$(function () {
  $(".register-form input").on("click", function (e) {
    e.preventDefault();
    $(".form-row").toggleClass("active");
  });
});
