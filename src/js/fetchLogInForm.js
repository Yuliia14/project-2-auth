import getRefs from './refsAuth';
const refs = getRefs();
import closeAuthModal from './renderAuthModal';

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
                .then(response => {
                    console.log(response);
                    if(response.ok) {
                        refs.authFormContainer.innerHTML =' ';
                    } else if (response.status === 403) {
                        alert('Ошибка HTTP ' + response.status + ': Неправильний email або пароль');
                    } else if (response.status === 400) {
                        alert('Ошибка HTTP ' + response.status + ': Заповніть, будь ласка, всі поля.');
                    } else {
                        alert('Ошибка HTTP ' + response.status + ': Вибачте, щось пішло не так, повторіть реєстрацію, будь ласка.');
                    }    
                    }
                )
                .catch(error => {
                    console.log(error);
                    alert('Вибачте, щось пішло не так, повторіть реєстрацію, будь ласка');
                });
            }
        }