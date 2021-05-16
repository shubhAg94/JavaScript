const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const signup = document.getElementById('signup');
const modalContainer = document.getElementById('modal-container-id');

/* Toggle Nav */

hamburger.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

/* Open Modal */
signup.addEventListener('click', () => {
  console.log(modalContainer.classList);
  modalContainer.classList.add('show-modal');
  console.log(modalContainer.classList);
})

/* close Modal */
close.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal');
})

// Hide model on outside click
// window.addEventListener('click', e => {
//   e.target === modalContainer ? modalContainer.classList.remove('show-modal') : false;
// });
//We can attach click event on ovelay div only insted of window object
modalContainer.addEventListener('click', e => {
  e.target === modalContainer ? modalContainer.classList.remove('show-modal') : false;
});
