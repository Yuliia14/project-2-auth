import getRefs from './refsAuth';
const refs = getRefs();
import closeAuthModal from './renderAuthModal';
import failureCallBack from './failureCallBack'

export default class FetchLogIn {
        constructor ({ email, password }) {
            this.email = email,
            this.password = password,
    
            this.options = {
                method: 'POST',
                headers: {"accept": "application/json",  "Content-Type": "application/json"},
                body: JSON.stringify({"email": `${email}`, "password": `${password}`})
            };
        }
            getCurrentUserData() {
                return fetch(`https://callboard-backend.herokuapp.com/auth/login`, this.options)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }
        }