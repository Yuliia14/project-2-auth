import AuthModalTmpl from '../templates/authorization.hbs';
import FetchRegistration from './fetchRegForm';
import FetchLogIn from './fetchLogInForm';

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

        const formEl = document.querySelector( '.js-auth-form' );
        formEl.addEventListener('submit', closeAuthModal);
        console.log(formEl);

        function sendFormData(event) {
            if(event.target.classList.contains("js-register")) {
                event.preventDefault();
                let email = document.querySelector('.js-reg-email').value;
                let password = document.querySelector('.js-reg-password').value;

                const fetchRegistration = new FetchRegistration({ email, password });
                    fetchRegistration.addNewUser();
            } else if(event.target.classList.contains("js-login")) {
                event.preventDefault();
                let email = document.querySelector('.js-reg-email').value;
                let password = document.querySelector('.js-reg-password').value;

                const fetchLogIn = new FetchLogIn({ email, password });
                fetchLogIn.getCurrentUserData();
            }
        }
}
export default function closeAuthModal(event) {
    event.preventDefault();
    refs.authFormContainer.innerHTML =' ';
}