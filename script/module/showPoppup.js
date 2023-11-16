
// Скрыть , показать блоки Login и Register
function showPoppup() {

    const btnLogin = document.querySelector('.form__header-btn-login'),
        btnReg = document.querySelector('.form__header-btn-registr'),
        wrapperLogin = document.querySelector('.form__wrapper-autho'),
        wrapperReg = document.querySelector('.form__wrapper-reg');

    // Функция показа блок Логин и скрытие блока Регистрации
    function showLogin() {
        wrapperLogin.style.display = 'flex';
        btnLogin.classList.add('form__header-btn-active');
        wrapperReg.style.display = 'none';
        btnReg.classList.remove('form__header-btn-active');

        // Очистить Инпуты
        document.querySelector('#emailReg').value = '';
        document.querySelector('#passwordReg').value = '';
        document.querySelector('#repeatPassword').value = '';

        // Очистка ошибки
        document.querySelector('.mail__reg-error').textContent = '';
        document.querySelector('.pass__reg-error').textContent = '';
        document.querySelector('.pass__reg-repeat-error').textContent = '';

    }

    // Функция показа блока Регистрации и скрытие блока Логина
    function showReg() {
        wrapperLogin.style.display = 'none';
        btnLogin.classList.remove('form__header-btn-active');
        wrapperReg.style.display = 'flex';
        btnReg.classList.add('form__header-btn-active');

        // Очистить Инпуты
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';

        // Очистка ошибки
        document.querySelector('.mail__error').textContent = '';
        document.querySelector('.pass__error').textContent = '';
    }

    // Обработчик на кнопки в шапке формы Логин и Решистрации
    btnLogin.addEventListener('click', showLogin);
    btnReg.addEventListener('click', showReg);
}

export default showPoppup;