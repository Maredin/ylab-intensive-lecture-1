function reg() {
    const btnReg = document.querySelector('.form__btn-reg');
    function regSubmit(e) {
        e.preventDefault();
        let errorForm = false;

        const mail = document.querySelector('#emailReg').value,
            pass = document.querySelector('#passwordReg').value,
            repeatPass = document.querySelector('#repeatPassword').value;

        // Очистка инпутов
        function clearInput() {
            document.querySelector('#emailReg').value = '';
            document.querySelector('#passwordReg').value = '';
            document.querySelector('#repeatPassword').value = '';
        }

        //Решистрация успешна
        function regComplie() {
            // Переход на Логин вкладку
            const btnLogin = document.querySelector('.form__header-btn-login'),
                btnReg = document.querySelector('.form__header-btn-registr'),
                wrapperLogin = document.querySelector('.form__wrapper-autho'),
                wrapperReg = document.querySelector('.form__wrapper-reg');

            wrapperLogin.style.display = 'flex';
            btnLogin.classList.add('form__header-btn-active');
            wrapperReg.style.display = 'none';
            btnReg.classList.remove('form__header-btn-active');

            // Блок регистрация успешна показать и закрыть через 2 сек
            const complite = document.querySelector('.regcomplite');
            complite.style.display = 'block';
            setTimeout(() => {
                complite.style.display = 'none';
            }, 2000);
        }

        // Валидация Email
        function validateMail(email) {
            const error = document.querySelector('.mail__reg-error');
            error.textContent = ''
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email) {
                error.textContent = 'Введите Email';
                errorForm = true;
            } else if (!email.match(pattern)) {
                error.textContent = 'Не правильно набран Email'
                errorForm = true;
            }
        }
        validateMail(mail);

        // Валидация пароля
        function validatePass(pass) {
            const error = document.querySelector('.pass__reg-error');
            error.textContent = '';
            if (!pass) {
                error.textContent = 'Введите пароль';
                errorForm = true;
            }
        }
        validatePass(pass);

        // Повтор пароля проверка
        function checkPass(pass) {
            const error = document.querySelector('.pass__reg-repeat-error');
            error.textContent = '';
            if (pass !== repeatPass) {
                error.textContent = 'Не правильно введен повтор пароля!';
                errorForm = true;
            }
        }
        checkPass(pass);

        // Запись в локал сторедж данных
        const dataUsers = (JSON.parse(localStorage.getItem('dataUsers')) || []);
        let user = {
            email: mail,
            password: pass
        }

        const oldUsers = JSON.parse(localStorage.getItem('dataUsers'));

        if (!errorForm) {
            if (oldUsers) {
                for (let i = 0; i < oldUsers.length; i++) {
                    if (oldUsers[i].email == user.email) {
                        return
                    } else {
                        let newUser = [...dataUsers, user]
                        localStorage.setItem('dataUsers', JSON.stringify(newUser));
                        clearInput();
                        regComplie();
                        document.querySelector('.mail__error').textContent = '';
                        document.querySelector('.pass__error').textContent = '';
                    }
                }
            } else {
                let newUser = [...dataUsers, user]
                localStorage.setItem('dataUsers', JSON.stringify(newUser));
                clearInput();
                regComplie();
                document.querySelector('.mail__error').textContent = '';
                document.querySelector('.pass__error').textContent = '';
            }
        }
    }

    btnReg.addEventListener('click', regSubmit);
}

export default reg;