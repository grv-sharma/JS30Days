document.addEventListener("DOMContentLoaded", function() {
    const sliderImages = document.querySelectorAll(".slide");
    function debounce(mainFn, delay) {
        let timer;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                mainFn(...args);
            }, delay);
        };
    };

    function checkSlide() {
        sliderImages.forEach(sliderImage => {
            const winPosition = window.scrollY + window.innerHeight - sliderImage.height / 2;
            const imageBottom = sliderImage.offsetTop + sliderImage.height;
            const isHalfShown = winPosition > sliderImage.offsetTop; //imageBottom >= sliderImage.offsetTop;
            const isNotScrolledPast = window.scrollY < imageBottom;
            if (isHalfShown && isNotScrolledPast) {
                console.log("exec")
                sliderImage.classList.remove("inactive");
                sliderImage.classList.add("active");
            } else {
                sliderImage.classList.remove("active");
                sliderImage.classList.add("inactive");
            };
        });
    };

    document.addEventListener("scroll", debounce(checkSlide, 20));


});