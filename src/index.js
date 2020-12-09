import './sass/auth-modal.scss'

    const openModalBtn = document.querySelector('.auth-modal-open-button');
    const closeModalBtn = document.querySelector('.auth-modal-close-button');
    const authBackdropEl = document.querySelector('.auth-backdrop');
    const authModalEl = document.querySelector('.auth-modal');

  openModalBtn.addEventListener("click", openAuthModal());

  function openAuthModal() {
      console.log('dfdfdsfsdf'),
          authBackdropEl.classList.remove("is-hidden"),
          closeModalBtn.addEventListener("click", closeAuthModal())
      }
  
      function closeAuthModal() {
        authBackdropEl.classList.add("is-hidden");
    }