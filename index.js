changeClassByWidth(".hamburger", "hidden", ">");
changeClassByWidth("#nav-links", "hidden", "<");
changeClassByWidth("#socials", "hidden", "<");

$(window).resize(function () {
  changeClassByWidth(".hamburger", "hidden", ">");
  changeClassByWidth("#nav-links", "hidden", "<");
  changeClassByWidth("#socials", "hidden", "<");
  if (($(window).width() > 700) & !$("#mobile-nav").hasClass("hidden")) {
    $("#mobile-nav").slideUp(function () {
      $("#mobile-nav").addClass("hidden");
    });
    if ($(".hamburger").hasClass("flip-right")) {
      $(".hamburger").addClass("flip-left").removeClass("flip-right");
    }
  }
});

$(".hamburger").on("click", function () {
  if ($(this).hasClass("flip-right")) {
    $(this).addClass("flip-left").removeClass("flip-right");
  } else {
    $(this).addClass("flip-right").removeClass("flip-left");
  }
  $("#mobile-nav").slideToggle(function () {
    $("#mobile-nav").removeClass("hidden");
  });
});

function changeClassByWidth(selector, c, operator) {
  if (eval($(window).width() + operator + 700)) {
    $(selector).addClass(c);
  } else {
    $(selector).removeClass(c);
  }
}
