import getRefs from './refsAuth';
const refs = getRefs();

export default class FetchRegistration {
        constructor ({ email, password } ) {
            this.email = email,
            this.password = password,
    
            this.options = {
                method: 'POST',
                headers: {"accept": "application/json",  "Content-Type": "application/json"},
                body: JSON.stringify({ "email": `${email}`, "password": `${password}` })
            };
        }
            addNewUser() {
                return fetch(`https://callboard-backend.herokuapp.com/auth/register`, this.options)
                    .then(response => response.text())
                    .then(result => console.log(result))
                    .catch(error => console.log('error', error));
            }
        }