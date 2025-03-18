/* global instantsearch, algoliasearch */
// eslint-disable-next-line no-unused-vars
function loadAlgolia(config, translation) {

  const $main = $('.searchbox');
  const $container = $main.find('.searchbox-body');

  if ($container.length) { // Kiểm tra xem $container có phần tử nào không
    $container.on('wheel', function(event) { // Sử dụng $container trực tiếp
        const deltaY = event.originalEvent.deltaY;
        // Ngăn chặn sự kiện cuộn của trang chính
        if (deltaY !== 0) {
            event.preventDefault();
            $container.scrollTop($container.scrollTop() + deltaY); // Cập nhật vị trí cuộn
        }
    });
  }

  const search = instantsearch({
    indexName: config.indexName,
    searchClient: algoliasearch(config.applicationId, config.apiKey),
  });

  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: config?.config?.hitsPerPage || 10,
      attributesToSnippet: ['excerpt'],
    }),
  ]);

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#algolia-input',
      placeholder: translation.hint,
      showReset: false,
      showSubmit: false,
      showLoadingIndicator: false,
      cssClasses: {
        root: 'searchbox-input-container',
        form: 'searchbox-input-container',
        input: 'searchbox-input',
      },
    }),
  );

  if (config.showPoweredbyLabel === true) {
    search.addWidget(
      instantsearch.widgets.poweredBy({
        container: '#algolia-poweredby',
      }),
    );
  }

  search.addWidget(
    instantsearch.widgets.hits({
      container: '.searchbox-body',
      escapeHTML: false,
      cssClasses: {
        root: 'searchbox-result-container',
        emptyRoot: ['searchbox-result-item', 'disabled'],
      },
      templates: {
        empty: function (results) {
          return translation.no_result + ': ' + results.query;
        },
        item: function (hit) {
          let title = instantsearch.highlight({ attribute: 'title', hit });
          let excerpt = instantsearch.highlight({ attribute: 'excerpt', hit });
          title = title ? title : translation.untitled;
          excerpt = excerpt
            .replace(new RegExp('<em>', 'ig'), '[algolia-highlight]')
            .replace(new RegExp('</em>', 'ig'), '[/algolia-highlight]')
            .replace(/(<([^>]+)>)/gi, '')
            .replace(/(\[algolia-highlight\])/gi, '<em>')
            .replace(/(\[\/algolia-highlight\])/gi, '</em>');
          excerpt = excerpt ? excerpt : translation.empty_preview;
          return `<section class="searchbox-result-section">
                        <a class="searchbox-result-item" href="${hit.permalink}">
                            <span class="searchbox-result-content">
                                <span class="searchbox-result-title">${title}</span>
                                <span class="searchbox-result-preview">${excerpt}</span>
                            </span>
                        </a>
                    </section>`;
        },
      },
    }),
  );

  search.addWidget(
    instantsearch.widgets.pagination({
      container: '.searchbox-footer',
      cssClasses: {
        list: 'searchbox-pagination',
        item: 'searchbox-pagination-item',
        link: 'searchbox-pagination-link',
        selectedItem: 'active',
        disabledItem: 'disabled',
      },
      scrollTo: false,
      totalPages: config?.config?.totalPages,
      padding: config?.config?.padding,
    }),
  );

  search.start();

  if (location.hash.trim() === '#algolia-search') {
    $('.searchbox').addClass('show');
  }

  document.querySelectorAll('.searchbox-pagination-link').forEach(link => {
    link.setAttribute('href', '/');
  });

  function selectItemByDiff(value) {
    const $items = $.makeArray($container.find('.searchbox-result-item'));
    let prevPosition = -1;

    // Tìm vị trí hiện tại của mục đang active
    $items.forEach((item, index) => {
        if ($(item).hasClass('active')) {
            prevPosition = index;
        }
    });

    // Tính toán nextPosition
    let nextPosition = prevPosition + value;

    // Giới hạn nextPosition trong khoảng hợp lệ
    if (nextPosition < 0) {
        nextPosition = 0;
    } else if (nextPosition >= $items.length) {
        nextPosition = $items.length - 1;
    }

    // Cập nhật trạng thái active
    if (prevPosition !== -1) {
        $($items[prevPosition]).removeClass('active');
    }
    $($items[nextPosition]).addClass('active');

    // Cuộn đến mục mới nếu cần
    scrollTo($($items[nextPosition]));
  }

  function scrollTo($item) {
    if ($item.length === 0) return;

    const container = $container[0];
    const containerHeight = container.clientHeight;
    const containerScrollTop = $container.scrollTop();
    const itemRect = $item[0].getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    
    // Tính toán vị trí của item trong container
    const itemTop = itemRect.top - containerRect.top + containerScrollTop;
    const itemHeight = $item.outerHeight();

    // Cuộn xuống để có một mục dư ra phía dưới
    if (itemTop + itemHeight > containerScrollTop + containerHeight) {
        $container.scrollTop(itemTop + itemHeight - containerHeight + itemHeight);
    } 
    // Cuộn lên để có một mục dư ra phía trên
    else if (itemTop < containerScrollTop) {
        $container.scrollTop(itemTop - itemHeight);
    }
  }

  function gotoLink($item) {
    if ($item && $item.length) {
      location.href = $item.attr('href');
    }
  }

  $(document)
    .on('click', 'a.navbar-item.search', () => {
      $('.searchbox').toggleClass('show');
      $('.searchbox-input').focus();
      $('body').toggleClass('overflow-hidden'); // Thêm hoặc loại bỏ lớp fixed
    })
    .on('click', '.searchbox .searchbox-mask', () => {
      $('.searchbox').removeClass('show');
      $('body').removeClass('overflow-hidden'); // Đảm bảo loại bỏ lớp fixed
    })
    .on('click', '.searchbox-close', () => {
      $('.searchbox').removeClass('show');
      $('body').removeClass('overflow-hidden'); // Đảm bảo loại bỏ lớp fixed
    })
    .on('keydown', (e) => {
      if (!$main.hasClass('show')) return;
      switch (e.keyCode) {
        case 27: // ESC
          $main.removeClass('show');
          break;
        case 38: // UP
          e.preventDefault()
          selectItemByDiff(-1);
          break;
        case 40: // DOWN
          e.preventDefault()
          selectItemByDiff(1);
          break;
        case 37: // LEFT
          e.preventDefault();
          // Thêm logic cho mũi tên trái ở đây
          break;
        case 39: // RIGHT
          e.preventDefault();
          // Thêm logic cho mũi tên phải ở đây
          break;
        case 13: // ENTER
          gotoLink($container.find('.searchbox-result-item.active').eq(0));
          break;
      }
    })
    .on('touchstart', (e) => {
      touch = true;
    })
    .on('touchmove', (e) => {
      touch = false;
    });
}
