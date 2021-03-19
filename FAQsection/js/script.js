const faqButton = document.querySelector('.faq-section');
const faqResponse = document.querySelector('.faq-response');

faqButton.addEventListener('click', function() {
  faqResponse.classList.remove('faq-response');
  faqResponse.classList.toggle('show');
  console.log(faqResponse.classList);
});
