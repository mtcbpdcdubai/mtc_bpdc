document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var fadeUpElements = document.querySelectorAll('#scroll');

        for (var i = 0; i < fadeUpElements.length; i++) {
            var element = fadeUpElements[i];
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= 0) {
                element.classList.add('fade-up-active');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var fadeUpElements = document.querySelectorAll('#effect');

        for (var i = 0; i < fadeUpElements.length; i++) {
            var element = fadeUpElements[i];
            var positionFromTop = element.getBoundingClientRect().top;

            if (positionFromTop - window.innerHeight <= 0) {
                element.classList.add('fade-up-active');
            }
          }
      });
    });