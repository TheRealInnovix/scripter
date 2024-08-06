document.addEventListener('DOMContentLoaded', () => {
  const worksButton = document.getElementById('works-button');
  const exploreButton = document.getElementById('explore-button');
  const aboutButton = document.getElementById('about-button');
  const soonButton = document.getElementById('soon-button');
  const worksContent = document.getElementById('works-content');
  const aboutContent = document.getElementById('about-content');
  const soonContent = document.getElementById('soon-content');

  console.log('worksButton:', worksButton);
  console.log('exploreButton:', exploreButton);
  console.log('aboutButton:', aboutButton);
  console.log('soonButton:', soonButton);
  console.log('worksContent:', worksContent);
  console.log('aboutContent:', aboutContent);
  console.log('soonContent:', soonContent);

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

  worksButton.addEventListener('click', () => scrollToElement(worksContent));
  exploreButton.addEventListener('click', () => scrollToElement(worksContent));
  aboutButton.addEventListener('click', () => scrollToElement(aboutContent));
  soonButton.addEventListener('click', () => scrollToElement(soonContent));

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
