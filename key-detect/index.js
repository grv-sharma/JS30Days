document.addEventListener('DOMContentLoaded', function() {
    secretCode = "gaurav";
    wrdArr = [];
    document.addEventListener('keyup', (e) => {
        wrdArr.push(e.key);
        wrdArr.splice(-secretCode.length - 1, wrdArr.length - secretCode.length);
        if (wrdArr.join('').includes(secretCode)) {
            cornify_add();
        }
    });
});