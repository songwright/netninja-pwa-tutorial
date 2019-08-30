// sign up
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get user info.
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // Sign up the user.
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  })
})

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut()
})