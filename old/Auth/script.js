//LOGIN
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // validate username and password here
  console.log(`Username: ${username}, Password: ${password}`);
});
