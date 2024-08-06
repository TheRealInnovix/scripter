document.addEventListener('DOMContentLoaded', () => {
  const worksButton = document.getElementById('works-button');
  const exploreButton = document.getElementById('explore-button');
  const aboutButton = document.getElementById('about-button');
  const soonButton = document.getElementById('soon-button');
  const worksContent = document.getElementById('works-content');
  const aboutContent = document.getElementById('about-content');
  const soonContent = document.getElementById('soon-content');

  if (!worksButton || !exploreButton || !aboutButton || !soonButton || !worksContent || !aboutContent || !soonContent) {
    console.error('One or more elements are missing from the DOM.');
    return;
  }

  function handleScroll() {
    const viewportHeight = window.innerHeight;
    const worksContentTop = worksContent.getBoundingClientRect().top;
    const worksContentHeight = worksContent.offsetHeight;
    const aboutContentTop = aboutContent.getBoundingClientRect().top;
    const aboutContentHeight = aboutContent.offsetHeight;
    const soonContentTop = soonContent.getBoundingClientRect().top;
    const soonContentHeight = soonContent.offsetHeight;

    worksContent.style.opacity = (worksContentTop < viewportHeight && worksContentTop + worksContentHeight > 0) ? 1 : 0;
    aboutContent.style.opacity = (aboutContentTop < viewportHeight && aboutContentTop + aboutContentHeight > 0) ? 1 : 0;
    soonContent.style.opacity = (soonContentTop < viewportHeight && soonContentTop + soonContentHeight > 0) ? 1 : 0;
  }

  function scrollToElement(element) {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  if (worksButton) {
    worksButton.addEventListener('click', () => scrollToElement(worksContent));
  }

  if (exploreButton) {
    exploreButton.addEventListener('click', () => scrollToElement(worksContent));
  }

  if (aboutButton) {
    aboutButton.addEventListener('click', () => scrollToElement(aboutContent));
  }

  if (soonButton) {
    soonButton.addEventListener('click', () => scrollToElement(soonContent));
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll(); 
});
