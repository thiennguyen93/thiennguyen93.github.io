(function() {
    function $() {
        return Array.prototype.slice.call(document.querySelectorAll.apply(document, arguments));
    }

    $('body > .navbar, body > .section, body > .footer').forEach(element => {
        element.style.transition = '0s';
        element.style.opacity = '0';
    });
    document.querySelector('body > .navbar').style.transform = 'translateY(-100px)';
    [
        '.column-main > .card, .column-main > .pagination, .column-main > .post-navigation',
        '.column-left > .card, .column-right-shadow > .card',
        '.column-right > .card'
    ].forEach(selector => {
        $(selector).forEach(element => {
            element.style.transition = '0s';
            element.style.opacity = '0';
            element.style.transform = 'scale(0.8)';
            element.style.transformOrigin = 'center top';
        });
    });
    // disable jump to location.hash
    if (window.location.hash) {
        window.scrollTo(0, 0);
        setTimeout(() => window.scrollTo(0, 0));
    }

    setTimeout(() => {
        $('body > .navbar, body > .section, body > .footer').forEach(element => {
            element.style.opacity = '1';
            element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
        });
        document.querySelector('body > .navbar').style.transform = 'translateY(0)';

        let i = 1;
        [
            '.column-main > .card, .column-main > .pagination, .column-main > .post-navigation',
            '.column-left > .card, .column-right-shadow > .card',
            '.column-right > .card'
        ].forEach(selector => {
            $(selector).forEach(element => {
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = '';
                    element.style.transition = 'opacity 0.3s ease-out, transform 0.3s ease-out';
                }, i * 100);
                i++;
            });
        });

        // jump to location.hash
        if (window.location.hash) {
            setTimeout(() => {
                let hash = decodeURIComponent(window.location.hash.substring(1));
                
                // Xử lý trường hợp có dấu chấm sau số đầu tiên, xử lý hash có emoji và hash có number riêng biệt
                hash = hash.replace(/^(\d+)\./, '\$1');
                
                const id = '#' + CSS.escape(hash);

                const target = document.querySelector(id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                } else {
                    console.log("Element not found:", id);
                }
            }, i * 100);
        }
        
    });
}());
