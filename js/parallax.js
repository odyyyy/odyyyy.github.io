document.addEventListener('DOMContentLoaded', function () {
    let parallaxSection = document.getElementById('parallaxSection');

    function handleScroll() {
      let scrollPosition = window.scrollY;
      parallaxSection.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
  });
