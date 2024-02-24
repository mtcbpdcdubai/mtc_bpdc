document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var fadeUpElements = document.querySelectorAll('#scroll');

        for (var i = 0; i < fadeUpElements.length; i++) {
            var element = fadeUpElements[i];
            var positionFromTop = element.getBoundingClientRect().top;

            if (window.innerWidth > 915 && positionFromTop - window.innerHeight <= 0) {
                element.classList.add('fade-up-active');
            }
            else {
                element.classList.remove('fade-up-active'); // Remove the class to stop the animation
                element.style.transform = 'translateY(0) !important'; // Set the final translateY value
                element.style.transform = 'translateX(0) !important'; // Set the final translateY value
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

            if (window.innerWidth > 915 && positionFromTop - window.innerHeight <= 0) {
                element.classList.add('fade-up-active');
            }
            else {
                element.classList.remove('fade-up-active'); // Remove the class to stop the animation
                element.style.transform = 'translateY(0) !important'; // Set the final translateY value
                element.style.transform = 'translateX(0) !important'; // Set the final translateY value
            }
          }
      });
    });