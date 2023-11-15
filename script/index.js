// Скрыть , показать блоки Login и Register
const btnLogin = document.querySelector('.form__header-btn-login'),
    btnReg = document.querySelector('.form__header-btn-registr'),
    wrapperLogin = document.querySelector('.form__wrapper-autho'),
    wrapperReg = document.querySelector('.form__wrapper-reg');;

// Функция показа блок Логин и скрытие блока Регистрации
function showLogin() {
    wrapperLogin.style.display = 'flex';
    btnLogin.classList.add('form__header-btn-active');
    wrapperReg.style.display = 'none';
    btnReg.classList.remove('form__header-btn-active');
}

// Функция показа блока Регистрации и скрытие блока Логина
function showReg() {
    wrapperLogin.style.display = 'none';
    btnLogin.classList.remove('form__header-btn-active');
    wrapperReg.style.display = 'flex';
    btnReg.classList.add('form__header-btn-active');
}

// Обработчик на кнопки в шапке формы Логин и Решистрации
btnLogin.addEventListener('click', showLogin);
btnReg.addEventListener('click', showReg);

//-----------------------------------------//


const btnPostForm = document.querySelector('.form__btn-autho');

function postForm(e) {
    e.preventDefault();
    const mailUser = document.querySelector('.form__mail-input').value,
        passUser = document.querySelector('.form__pass-input').value;


    // Валидация Email
    function validateMail(email) {
        const error = document.querySelector('.mail__error');
        error.textContent = ''
        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email) {
            error.textContent = 'Введите Email'
        } else if (!email.match(pattern)) {
            error.textContent = 'Не правильно набран Email'
        }
    }
    validateMail(mailUser);

    // Валидация пароля
    function validatePass(pass) {
        const error = document.querySelector('.pass__error');
        error.textContent = ''
        if (!pass) {
            error.textContent = 'Введите пароль';
        }
    }
    validatePass(passUser);


    // Отправка пост запроса с помощью fetch
    if (mailUser && passUser) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // Данные POST запроса
                email: mailUser,
                password: passUser
            })
        })
            .then(res => res.json())
            .then(data => {
                // Вывод данных в консоль
                console.log(data)
            })
            .catch(error => {
                // Обработка ошибки
                console.log(error)
            })
    }
}

btnPostForm.addEventListener('click', postForm);