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
      worksContent.classList.add('fade-in');
      worksContent.classList.remove('fade-out');
    } else {
      worksContent.classList.add('fade-out');
      worksContent.classList.remove('fade-in');
    }

    if (aboutContentTop < viewportHeight && aboutContentTop + aboutContentHeight > 0) {
      aboutContent.classList.add('fade-in');
      aboutContent.classList.remove('fade-out');
    } else {
      aboutContent.classList.add('fade-out');
      aboutContent.classList.remove('fade-in');
    }

    if (soonContentTop < viewportHeight && soonContentTop + soonContentHeight > 0) {
      soonContent.classList.add('fade-in');
      soonContent.classList.remove('fade-out');
    } else {
      soonContent.classList.add('fade-out');
      soonContent.classList.remove('fade-in');
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
