document.addEventListener('DOMContentLoaded', function() {
    const panelChildren = document.querySelectorAll('.panel-child');

    panelChildren.forEach(function(e) {
        e.addEventListener('click', function() {
            e.classList.toggle('clicked');
        });
    });
});
