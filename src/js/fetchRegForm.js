import getRefs from './refsAuth';
const refs = getRefs();
import closeAuthModal from './renderAuthModal';

export default class FetchRegistration {
        constructor ({ email, password }) {
            this.email = email,
            this.password = password,
    
            this.options = {
                method: 'POST',
                headers: {"accept": "application/json",  "Content-Type": "application/json"},
                body: JSON.stringify({"email": `${email}`, "password": `${password}`})
            };
        }
            addNewUser(event) {
                return fetch(`https://callboard-backend.herokuapp.com/auth/register`, this.options)
                    .then(response => {
                        console.log(response);
                        if(response.ok) {
                            alert('Дякуємо. Реєстрація пройшла успішно!');
                            refs.authFormContainer.innerHTML =' ';
                        } else if (response.status === 409) {
                            alert('Ошибка HTTP ' + response.status + ': Користувач з таким email вже зареєстрований.');
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