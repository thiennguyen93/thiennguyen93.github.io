window.addEventListener(
  "scroll",
  function () {
    initViewportImage();
  },
  { passive: true }
);

window.addEventListener("resize", function () {
  initViewportImage();
});

/*** INITS */
initViewportImage();

// IMAGE VIEWPORT
function isVisibleInViewPort(e) {
  var viewTop = $(window).scrollTop();
  var viewBottom = viewTop + $(window).height();

  var eTop = $(e).offset().top;
  var eBottom = eTop + $(e).height();

  return eBottom <= viewBottom && eTop >= viewTop;
}

function initViewportImage() {
  $(".in-view-effect").each(function () {
    if (isVisibleInViewPort($(this))) {
      $(this).addClass("in-view");
    } else {
      $(this).removeClass("in-view");
    }
  });
}
