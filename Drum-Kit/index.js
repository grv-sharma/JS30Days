document.addEventListener('DOMContentLoaded', function() {
    function removeTransition(e) {
        if (e.propertyName != 'transform') return;
        e.target.classList.remove('playing');
    }
    document.addEventListener('keydown', function(e){
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return;

        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
        //console.log(e);
    });
    const keys = Array.from(document.querySelectorAll('.key'));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
