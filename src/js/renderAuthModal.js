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
        
        // let form = document.querySelector('.js-auth-form');
        // const formData = new FormData(form);

        function sendFormData(event) {
            if(event.target.classList.contains("js-register")) {
                event.preventDefault();
                let email = document.querySelector('.js-reg-email').value;
                let password = document.querySelector('.js-reg-password').value;

                const fetchRegistration = new FetchRegistration({ email, password });
                fetchRegistration.addNewUser();
                console.log(email);
                console.log(password);
            }
        }
}
export default function closeAuthModal(event) {
    event.preventDefault();
    refs.authFormContainer.innerHTML =' ';
}