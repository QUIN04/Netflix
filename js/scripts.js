
const checkboxes = document.querySelectorAll('.faq .question input[type="checkbox"]');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const answer = checkbox.nextElementSibling.nextElementSibling;
    if (checkbox.checked) {
      answer.style.maxHeight = '600px'; 
    } else {
      answer.style.maxHeight = '0';
    }
  });
});


const languageSelect = document.querySelector('header select');


languageSelect.addEventListener('change', () => {
 
  console.log('Selected language:', languageSelect.value); 
});


const emailForm = document.querySelector('.cta form');
emailForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const emailInput = emailForm.querySelector('input[type="email"]');
  const email = emailInput.value;

  if (!isValidEmail(email)) {
   
    alert('Please enter a valid email address.');
    return;
  }

  console.log('Submitted email:', email); 
});


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}