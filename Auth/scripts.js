
//REGISTER
const form = document.getElementById('registration-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = form.elements['username'].value;
  const email = form.elements['email'].value;
  const password = form.elements['password'].value;
  const confirmPassword = form.elements['confirm-password'].value;
  
  if (password !== confirmPassword) {
    alert('Passwords do not match');
  } else {
    alert(`Thank you for registering, ${username}!`);
    form.reset();
  }
});
