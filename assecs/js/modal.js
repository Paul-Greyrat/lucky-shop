const container = document.getElementById('content');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
// click=> add|remove 
registerBtn.addEventListener('click', () =>{ 
  container.classList.add("active");
});
loginBtn.addEventListener('click', () =>{ 
  container.classList.remove("active");
}); 