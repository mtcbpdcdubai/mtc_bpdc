document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var fadeUpElements = document.querySelectorAll('#box-1');

        for (var i = 0; i < fadeUpElements.length; i++) {
            var element = fadeUpElements[i];
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= 0) {
                element.classList.add('fade-up-active');
            }
        }
        var fadeUpElements = document.querySelectorAll('#box-2');

        for (var i = 0; i < fadeUpElements.length; i++) {
            var element = fadeUpElements[i];
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= 0) {
                element.classList.add('fade-up-active');
            }
        }
    });
});