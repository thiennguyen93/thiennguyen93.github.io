$(document).ready(() => {
  console.log("Page loaded");
  var lazyLoadInstance = new LazyLoad({
    // Thien Nguyen
    restore_on_error: true,
  });
  lazyLoadInstance.update();
});
