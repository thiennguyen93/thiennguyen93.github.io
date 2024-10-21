/* global instantsearch, algoliasearch */
// eslint-disable-next-line no-unused-vars
function loadAlgolia(config, translation) {

  const $main = $('.searchbox');
  const $input = $main.find('.searchbox-input');
  const $container = $main.find('.searchbox-body');

  const search = instantsearch({
    indexName: config.indexName,
    searchClient: algoliasearch(config.applicationId, config.apiKey),
  });

  search.addWidgets([
    instantsearch.widgets.configure({
      hitsPerPage: 5,
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

  search.addWidget(
    instantsearch.widgets.poweredBy({
      container: '#algolia-poweredby',
    }),
  );

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
      scrollTo: false
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
    $items.forEach((item, index) => {
      if ($(item).hasClass('active')) {
        prevPosition = index;
      }
    });
    const nextPosition = ($items.length + prevPosition + value) % $items.length;
    $($items[prevPosition]).removeClass('active');
    $($items[nextPosition]).addClass('active');
    scrollTo($($items[nextPosition]));
  }

  function scrollTo($item) {
    if ($item.length === 0) return;
    const wrapperHeight = $container[0].clientHeight;
    const itemTop = $item.position().top - $container.scrollTop();
    const itemBottom = $item[0].clientHeight + $item.position().top;
    if (itemBottom > wrapperHeight + $container.scrollTop()) {
      $container.scrollTop(itemBottom - $container[0].clientHeight);
    }
    if (itemTop < 0) {
      $container.scrollTop($item.position().top);
    }
  }

  function gotoLink($item) {
    if ($item && $item.length) {
      location.href = $item.attr('href');
    }
  }

  $(document)
    .on('click', '.navbar-main .search', () => {
      $('.searchbox').toggleClass('show');
      $('.searchbox-input').focus();
    })
    .on('click', '.searchbox .searchbox-mask', () => {
      $('.searchbox').removeClass('show');
    })
    .on('click', '.searchbox-close', () => {
      $('.searchbox').removeClass('show');
    })
    .on('keydown', (e) => {
      if (!$main.hasClass('show')) return;
      switch (e.keyCode) {
        case 27: // ESC
          $main.removeClass('show');
          break;
        case 38: // UP
          selectItemByDiff(-1);
          break;
        case 40: // DOWN
          selectItemByDiff(1);
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
