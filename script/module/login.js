function login() {
    const btnPostForm = document.querySelector('.form__btn-autho');


    function postForm(e) {
        e.preventDefault();
        let errorForm = false;
        const mailUser = document.querySelector('#email').value,
            passUser = document.querySelector('#password').value;


        // Валидация Email
        function validateMail(email) {
            const error = document.querySelector('.mail__error');
            error.textContent = ''
            const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email) {
                error.textContent = 'Введите Email'
                errorForm = true;
            } else if (!email.match(pattern)) {
                error.textContent = 'Не правильно набран Email'
                errorForm = true;
            }
        }
        validateMail(mailUser);

        // Валидация пароля
        function validatePass(pass) {
            const error = document.querySelector('.pass__error');
            error.textContent = ''
            if (!pass) {
                error.textContent = 'Введите пароль';
                errorForm = true;
            }
        }
        validatePass(passUser);


        // Отправка пост запроса с помощью fetch
        if (mailUser && passUser && !errorForm) {
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
            enterLogin();
        }

        // Проверка логина в базе
        function enterLogin() {
            const errorMail = document.querySelector('.mail__error');
            const errorPass = document.querySelector('.pass__error');


            const dataUsers = JSON.parse(localStorage.getItem('dataUsers'));

            if (dataUsers) {
                for (let i = 0; i < dataUsers.length; i++) {
                    if (dataUsers[i].email == mailUser) {
                        errorMail.textContent = '';
                        if (dataUsers[i].password == passUser) {
                            errorPass.textContent = '';
                            document.querySelector('.form').style.display = 'none';
                            document.querySelector('.welcome').style.display = 'block';
                            setTimeout(() => {
                                document.querySelector('.form').style.display = 'block';
                                document.querySelector('.welcome').style.display = 'none';
                            }, 5000);
                            return
                        } else {
                            errorPass.textContent = 'Неправильно набран пароль';
                        }
                        return
                    } else {
                        errorMail.textContent = 'Пользователь не найден'
                    }

                }
            } else {
                errorMail.textContent = 'Пользователь не найден'
            }

        }

    }

    btnPostForm.addEventListener('click', postForm);
}

export default login;