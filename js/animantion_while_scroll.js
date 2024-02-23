let categoryElementsList = document.querySelectorAll('.category-container');
let fadeInFromLeftThresholds = [0.6, 0.55, 0.7]; 

window.addEventListener('scroll', function() {
  
  let scrollY = window.scrollY || document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;

 

  categoryElementsList.forEach(function(categoryElement, index) {
    let elementOffset = categoryElement.offsetTop;
    let fadeInThreshold = elementOffset - windowHeight * fadeInFromLeftThresholds[index];

    if (scrollY >= fadeInThreshold) {
      categoryElement.classList.add('fadeInFromLeft');
    } else {
      categoryElement.classList.remove('fadeInFromLeft');
    }
  });
});
