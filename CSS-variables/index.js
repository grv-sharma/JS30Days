document.addEventListener('DOMContentLoaded', function() {
    const ins = document.querySelectorAll('.controls input');
    function handleUpdate() {
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
    ins.forEach(input => input.addEventListener('change', handleUpdate));
    ins.forEach(input => input.addEventListener('mousemove', handleUpdate));

})
