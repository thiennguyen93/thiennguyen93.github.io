$(document).ready(() => {
  console.log("Page loaded");
  const recalculateMacy = ()=> {
    if (typeof macyInstance !== 'undefined') {
      macyInstance.recalculate(true)
  }
  }
  var lazyLoadInstance = new LazyLoad({
    // Thien Nguyen
    restore_on_error: false,
    // 
    callback_loaded: ()=>{
      // This is for page Photo Album category
      // Bởi vì page này sử dụng macy.js để tạo hiệu ứng Masonry, 
      // tuy nhiên khi ảnh đang load thì kích thước hiển thị không đúng
      // Bởi vậy sau lazyload phải callback để tính toán lại
      recalculateMacy()
    },
    callback_loading: ()=> {
      recalculateMacy()
    },
    // Handle error
    callback_error: (img) => {
      // Use the following line only if your images have the `srcset` attribute
      // img.setAttribute("srcset", "fallback_image@1x.jpg 1x, fallback_image@2x.jpg 2x");
      img.setAttribute("src", "/img/256px-no-image-placeholder.png")
      img.src = "/img/256px-no-image-placeholder.png"
      recalculateMacy()
    }
  });
  lazyLoadInstance.update();
});