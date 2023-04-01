
    window.addEventListener('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if (window.pageYOffset > 0) {
            navbar.style.background = '#FFC107';
        } else {
            navbar.style.background = '#1D63FF';
        }
    });
