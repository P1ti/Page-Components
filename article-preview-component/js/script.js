const popUp = document.querySelector('.pop-up');
const shareBtn = document.querySelector('.share');

shareBtn.addEventListener('click', function() {
  if (popUp.style.display === 'none') {
    popUp.style.display = 'block';
  } else {
    popUp.style.display = 'none';
  }
});
