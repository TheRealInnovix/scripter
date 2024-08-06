document.addEventListener('DOMContentLoaded', () => {
  const worksButton = document.getElementById('works-button');
  const exploreButton = document.getElementById('explore-button');
  const aboutButton = document.getElementById('about-button');
  const soonButton = document.getElementById('soon-button');
  const worksContent = document.getElementById('works-content');
  const aboutContent = document.getElementById('about-content');
  const soonContent = document.getElementById('soon-content');

  function handleScroll() {
    const viewportHeight = window.innerHeight;
    const worksContentTop = worksContent.getBoundingClientRect().top;
    const worksContentHeight = worksContent.offsetHeight;
    const aboutContentTop = aboutContent.getBoundingClientRect().top;
    const aboutContentHeight = aboutContent.offsetHeight;
    const soonContentTop = soonContent.getBoundingClientRect().top;
    const soonContentHeight = soonContent.offsetHeight;

    if (worksContentTop < viewportHeight && worksContentTop + worksContentHeight > 0) {
      worksContent.style.opacity = 1;
    } else {
      worksContent.style.opacity = 0;
    }

    if (aboutContentTop < viewportHeight && aboutContentTop + aboutContentHeight > 0) {
      aboutContent.style.opacity = 1;
    } else {
      aboutContent.style.opacity = 0;
    }

    if (soonContentTop < viewportHeight && soonContentTop + soonContentHeight > 0) {
      soonContent.style.opacity = 1;
    } else {
      soonContent.style.opacity = 0;
    }
  }

  worksButton.addEventListener('click', () => {
    worksContent.scrollIntoView({
      behavior: 'smooth'
    });
  });

  exploreButton.addEventListener('click', () => {
    worksContent.scrollIntoView({
      behavior: 'smooth'
    });
  });

  aboutButton.addEventListener('click', () => {
    aboutContent.scrollIntoView({
      behavior: 'smooth'
    });
  });

  soonButton.addEventListener('click', () => {
    soonContent.scrollIntoView({
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
