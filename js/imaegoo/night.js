(function() {
    /**
     * Thien Nguyen DEV
     * https://www.thiennguyen.dev/
     */ 
    var isNight = localStorage.getItem('night') || 'true'; // Default night mode
    if (!isNight) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            isNight = 'true'
            localStorage.setItem('night', 'true')
       } else {
            isNight = 'false'
            localStorage.setItem('night', 'false')
       }
    }
    var nightNav;
  
    function applyNight(value) {
        if (value.toString() === 'true') {
            document.body.classList.remove('light');
            document.body.classList.add('night');
        } else {
            document.body.classList.remove('night');
            document.body.classList.add('light');
        }
    }
  
    function findNightNav() {
        nightNav = document.getElementById('night-nav');
        if (!nightNav) {
            setTimeout(findNightNav, 100);
        } else {
            nightNav.addEventListener('click', switchNight);
        }
    }
  
    function switchNight() {
        isNight = isNight ? isNight.toString() !== 'true' : true;
        applyNight(isNight);
        localStorage.setItem('night', isNight);
    }
  
    findNightNav();
    isNight && applyNight(isNight);
  }());