document.getElementById('scripterButton').addEventListener('click', function() {
  document.getElementById('loadingScreen').style.display = 'flex';

  setTimeout(function() {
    window.location.href = 'home';
  }, 2000);
});
