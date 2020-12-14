import AuthModalTmpl from '../templates/authorization.hbs';
import FetchRegistration from './fetchRegForm';

import getRefs from './refsAuth';
const refs = getRefs();

refs.openModalBtn.addEventListener("click", renderAuthModal);

function renderAuthModal(form) {
    const markup = AuthModalTmpl(form)
    makeMarkup(markup);
    document.querySelector('.auth-modal-close-button').addEventListener("click", closeAuthModal);
}
    function makeMarkup(html) {
        refs.authFormContainer.insertAdjacentHTML('afterbegin', html);
        refs.authFormContainer.addEventListener('click', sendFormData);

        const formInputEmail = document.querySelector('.js-reg-email');
        const formInputPassword = document.querySelector('.js-reg-password');
        const email = formInputEmail.value;
        const password = formInputPassword.value;
        
        let form = document.querySelector('.js-auth-form');
        const formData = new FormData(form);

        const fetchRegistration = new FetchRegistration({ email, password });

        function sendFormData(event) {
            if(event.target.classList.contains("js-register")) {
                event.preventDefault();
                console.log(formInputEmail.value);
                console.log(formInputPassword.value);
                fetchRegistration.addNewUser();
            }
        }
}
export default function closeAuthModal(event) {
    event.preventDefault();
    refs.authFormContainer.innerHTML =' ';
}