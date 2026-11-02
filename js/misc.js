$(document).ready(() => {
    console.log('Page loaded');
    const recalculateMacy = () => {
        if (typeof macyInstance !== 'undefined') {
            // eslint-disable-next-line no-undef
            macyInstance.recalculate(true);
        }
    };
    // eslint-disable-next-line no-undef
    const lazyLoadInstance = new LazyLoad({
    // Thien Nguyen
        restore_on_error: false,
        //
        callback_loaded: () => {
            // This is for page Photo Album category
            // Bởi vì page này sử dụng macy.js để tạo hiệu ứng Masonry,
            // tuy nhiên khi ảnh đang load thì kích thước hiển thị không đúng
            // Bởi vậy sau lazyload phải callback để tính toán lại
            recalculateMacy();
        },
        callback_loading: () => {
            recalculateMacy();
        },
        // Handle error
        callback_error: img => {
            // Use the following line only if your images have the `srcset` attribute
            // img.setAttribute("srcset", "fallback_image@1x.jpg 1x, fallback_image@2x.jpg 2x");
            img.setAttribute('src', '/img/256px-no-image-placeholder.png');
            img.src = '/img/256px-no-image-placeholder.png';
            recalculateMacy();
        }
    });
    lazyLoadInstance.update();

    // thiennguyen: mobile-navbar hamburger button
    $('.navbar-burger').click(() => {
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');

        if ($('.navbar-menu').hasClass('is-active')) {
            // Added class to navbar too
            $('.navbar.mobile-navbar').addClass('is-opened');
        } else {
            $('.navbar.mobile-navbar').removeClass('is-opened');
        }

        // Remove mask
        const $mask = $('#menu-panel-mask');
        $mask.addClass('is-hidden');

        // hide toc mask
        $('#toc-mask').removeClass('is-active');
        $('#toc').removeClass('is-active');


        // Hide panel
        const $panel = $('#menu-language-select');
        $panel.addClass('is-hidden');

        // Ẩn những popup khác đang bật, toc, langauge select
        $('#toc').removeClass('is-active');
    });
});
