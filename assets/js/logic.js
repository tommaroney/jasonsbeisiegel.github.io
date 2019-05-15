document.addEventListener('DOMContentLoaded', function() {
    var parallaxes = document.querySelectorAll('.parallax');
    var parallinstances = M.Parallax.init(parallaxes, {responsiveThreshold: 1});

    var modals = document.querySelectorAll('.modal');
    var modinstances = M.Modal.init(modals, {opacity: .8});
});