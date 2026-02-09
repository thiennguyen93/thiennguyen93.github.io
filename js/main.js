/* eslint-disable node/no-unsupported-features/node-builtins */
/* eslint-disable node/no-unsupported-features/node-builtins */
(function($, moment, ClipboardJS, config) {
    $('.article img:not(".not-gallery-item")').each(function() {
        // wrap images with link and add caption if possible
        if ($(this).parent('a').length === 0) {
            let imgHref = $(this).attr('src');
            if ($(this).hasClass('lazy')) {
                // Check if lazy load enable  for the image ---> if yes, create light gallery with data-src
                imgHref = $(this).attr('data-src') || imgHref;
            }
            $(this).wrap('<a class="gallery-item" href="' + imgHref + '"></a>');

            if (this.alt) {
                $(this).after('<p class="has-text-centered is-size-6 caption">' + this.alt + '</p>');
            }
        }
    });

    if (typeof $.fn.lightGallery === 'function') {
        $('.article').lightGallery({ selector: '.gallery-item' });
    }
    if (typeof $.fn.justifiedGallery === 'function') {
        if ($('.justified-gallery > p > .gallery-item').length) {
            $('.justified-gallery > p > .gallery-item').unwrap();
        }
        $('.justified-gallery').justifiedGallery();
    }

    if (typeof moment === 'function') {
        $('.article-meta time').each(function() {
            $(this).text(moment($(this).attr('datetime')).fromNow());
        });
    }

    $('.article > .content > table').each(function() {
        if ($(this).width() > $(this).parent().width()) {
            $(this).wrap('<div class="table-overflow"></div>');
        }
    });

    function adjustNavbar() {
        const navbarWidth = $('.navbar-main .navbar-start').outerWidth() + $('.navbar-main .navbar-end').outerWidth();
        if ($(document).outerWidth() < navbarWidth) {
            $('.navbar-main .navbar-menu').addClass('justify-content-start');
        } else {
            $('.navbar-main .navbar-menu').removeClass('justify-content-start');
        }
    }
    adjustNavbar();
    $(window).resize(adjustNavbar);

    function toggleFold(codeBlock, isFolded) {
        const $toggle = $(codeBlock).find('.fold i');
        !isFolded ? $(codeBlock).removeClass('folded') : $(codeBlock).addClass('folded');
        !isFolded ? $toggle.removeClass('fa-angle-right') : $toggle.removeClass('fa-angle-down');
        !isFolded ? $toggle.addClass('fa-angle-down') : $toggle.addClass('fa-angle-right');
    }

    function createFoldButton(fold) {
        return '<span class="fold">' + (fold === 'unfolded' ? '<i class="fas fa-angle-down"></i>' : '<i class="fas fa-angle-right"></i>') + '</span>';
    }

    $('figure.highlight table').wrap('<div class="highlight-body">');
    if (typeof config !== 'undefined'
        && typeof config.article !== 'undefined'
        && typeof config.article.highlight !== 'undefined') {

        $('figure.highlight').addClass('hljs');
        $('figure.highlight .code .line span').each(function() {
            const classes = $(this).attr('class').split(/\s+/);
            if (classes.length === 1) {
                $(this).addClass('hljs-' + classes[0]);
                $(this).removeClass(classes[0]);
            }
        });


        const clipboard = config.article.highlight.clipboard;
        const fold = config.article.highlight.fold.trim();

        $('figure.highlight').each(function() {
            if ($(this).find('figcaption').length) {
                $(this).find('figcaption').addClass('level is-mobile');
                $(this).find('figcaption').append('<div class="level-left">');
                $(this).find('figcaption').append('<div class="level-right">');
                $(this).find('figcaption div.level-left').append($(this).find('figcaption').find('span'));
                $(this).find('figcaption div.level-right').append($(this).find('figcaption').find('a'));
            } else {
                if (clipboard || fold) {
                    $(this).prepend('<figcaption class="level is-mobile"><div class="level-left"></div><div class="level-right"></div></figcaption>');
                }
            }
        });

        if (typeof ClipboardJS !== 'undefined' && clipboard) {
            $('figure.highlight').each(function() {
                const id = 'code-' + Date.now() + (Math.random() * 1000 | 0);
                const button = '<a href="javascript:;" class="copy" title="Copy" data-clipboard-target="#' + id + ' .code"><i class="fas fa-copy"></i></a>';
                $(this).attr('id', id);
                $(this).find('figcaption div.level-right').append(button);
            });
            new ClipboardJS('.highlight .copy'); // eslint-disable-line no-new
        }

        if (fold) {
            $('figure.highlight').each(function() {
                if ($(this).find('figcaption').find('span').length > 0) {
                    const span = $(this).find('figcaption').find('span');
                    if (span[0].innerText.indexOf('>folded') > -1) {
                        span[0].innerText = span[0].innerText.replace('>folded', '');
                        $(this).find('figcaption div.level-left').prepend(createFoldButton('folded'));
                        toggleFold(this, true);
                        return;
                    }
                }
                $(this).find('figcaption div.level-left').prepend(createFoldButton(fold));
                toggleFold(this, fold === 'folded');
            });

            $('figure.highlight figcaption .fold').click(function() {
                const $code = $(this).closest('figure.highlight');
                toggleFold($code.eq(0), !$code.hasClass('folded'));
            });
        }
    }

    const $toc = $('#toc');
    if ($toc.length > 0) {
        const $mask = $('<div>');
        $mask.attr('id', 'toc-mask');
        $mask.attr('class', 'panel-mask');

        $('body').append($mask);

        function toggleToc() { // eslint-disable-line no-inner-declarations
            $toc.toggleClass('is-active');
            $mask.toggleClass('is-active');

            // Hide menu child panel  (e.g Language select)
            $('#menu-panel-mask').addClass('is-hidden');
            $('.child-menu-panel').addClass('is-hidden');

            $('.navbar-burger').removeClass('is-active');
            $('.navbar-menu').removeClass('is-active');
        }

        $toc.on('click', toggleToc);
        $mask.on('click', toggleToc);
        $('.navbar .navbar-item.catalogue').on('click', toggleToc);
    }


    // Append a mask for menu child panel
    const $menuPanelMask = $('<div>');
    $menuPanelMask.attr('id', 'menu-panel-mask');
    $menuPanelMask.attr('class', 'is-hidden panel-mask');
    $menuPanelMask.on('click', () => {
        $('.child-menu-panel').addClass('is-hidden');
        $menuPanelMask.addClass('is-hidden');
    });
    $('body').append($menuPanelMask);

}(jQuery, window.moment, window.ClipboardJS, window.IcarusThemeSettings));

// Added cmd+k shortcut for quick search
document.onkeydown = function(e) {
    // https://javascript.info/keyboard-events
    if (e.metaKey && e.code === 'KeyK') {
        document.querySelector('a.navbar-item.search').click();
        e.preventDefault();
        return;
    }
    if (e.key === 'Escape') {
        document.querySelector('a.searchbox-close').click();
        e.preventDefault();

    }
};

document.addEventListener('DOMContentLoaded', () => {
    const el_autohide = document.querySelectorAll('.autohide');
    let navbar_height = 0;
    const updatePaddingTop = () => {
        // add padding-top to bady (if necessary)
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';

        // Edit 04
        if (window.scrollY === 0) {
            // user scrolled to the top of the page
        }
    };
    const updateScrollPosition = () => {
        if (window.scrollY === 0) {
            el_autohide.forEach(item => {
                item.classList.add('scrolled-at-top-most');
                item.classList.remove('scrolled-at-middle');
            });
        } else {
            el_autohide.forEach(item => {
                item.classList.remove('scrolled-at-top-most');
                item.classList.add('scrolled-at-middle');
            });
        }
    };
    updateScrollPosition();
    updatePaddingTop();
    const el_is_sticky = document.querySelectorAll('.column.is-sticky,.column-right-shadow.is-sticky');

    if (el_autohide.length) {
        let last_scroll_top = 0;
        window.addEventListener('scroll', () => {
            const scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.forEach(item => {
                    item.classList.remove('scrolled-down');
                    item.classList.add('scrolled-up');
                });

                // sticky column
                for (let index = 0; index < el_is_sticky.length; index++) {
                    const element = el_is_sticky[index];
                    element.classList.remove('is-sticky-scrolled-down');
                    element.classList.add('is-sticky-scrolled-up');
                }

            } else {
                if (scroll_top >= navbar_height) {
                    el_autohide.forEach(item => {
                        item.classList.remove('scrolled-up');
                        item.classList.add('scrolled-down');
                    });

                    // sticky column
                    for (let index = 0; index < el_is_sticky.length; index++) {
                        const element = el_is_sticky[index];
                        element.classList.remove('is-sticky-scrolled-up');
                        element.classList.add('is-sticky-scrolled-down');
                    }
                }
                updatePaddingTop();
            }
            last_scroll_top = scroll_top;
            updateScrollPosition();
        });
        window.addEventListener('resize', updatePaddingTop);

        /*
        // Toggle button
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        themeToggleBtn.addEventListener('click', () => {
            const currentValue = !(localStorage.getItem('isDarkMode') === 'true');
            localStorage.setItem('isDarkMode', currentValue);
            window.isDarkMode = currentValue;
            if (currentValue) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
        });
        */
    }
});
// DOMContentLoaded  end
