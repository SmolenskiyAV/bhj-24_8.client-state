// ### Task 8.3 ###

const welcome = document.getElementById('welcome'); // приветственный баннер
const user_ID = document.getElementById('user_id');
const inputLogin = document.querySelector('input[name="login"]'); // элемент <input name="login"
const inputPassword = document.querySelector('input[name="password"]'); //элемент <input name="password"
const signoutBtn = document.getElementById('signout__btn'); // кнопка "Войти"
const signinBtn = document.getElementById('signin__btn');   // кнопка "деавторизация"

let form = document.getElementById('signin__form'); // элемент "форма авторизации"

async function getAuthiriz() {  // асинхронная функция получения данных опроса (опросного листа) с сервера
    
    let response = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', { 
      method: 'POST',
      body: new FormData(form) // формируем тело отправляемого запрса в качестве формы данных
    });
    
    inputLogin.value = ""; // очистка поля <input name="login"
    inputPassword.value = ""; // очистка поля <input name="password"
    
        
    if (response.ok) {  // если ответ от сервера успешный
      
        let data = await response.json(); // получаем данные с сервера в виде объекта
        let userId = data.user_id;  // переменная для хранения id пользователя
        
        if (data.success) {
            
            localStorage.setItem('user_id', userId); // сохраняем id в локальное хранилище
            user_ID.innerText = userId;     // заносим текущий id в приветственный баннер

            console.log('Success= ' + data.success); // КОНТРОЛЬНАЯ ТОЧКА
            console.log('User ID= ' + userId);  // КОНТРОЛЬНАЯ ТОЧКА
            
            welcome.classList.add('welcome_active');  // активируем (открываем) приветственный баннер               

        } else alert('Неверный логин/пароль');
    
    } else {
        alert('error', response.status);    
    };
    
  };

    inputLogin.value = ""; // очистка поля <input name="login" при перезагрузке страницы
    inputPassword.value = ""; // очистка поля <input name="password" при перезагрузке страницы

    if (localStorage.getItem('user_id')) {
        user_ID.innerText = localStorage.getItem('user_id');
        welcome.classList.add('welcome_active');
    };
  
    signinBtn.addEventListener('click', (e) => { // обработчик события submit для формы (АВТОРИЗАЦИЯ)
            e.preventDefault();     // сброс браузерного обработчика события "submit" по умолчанию
            getAuthiriz(); // вызов асинхронной функции для отправки данных авторизации
    });

    signoutBtn.onclick = (e) => { //ДЕВТОРИЗАЦИЯ
        e.preventDefault();   //  сброс браузерного обработчика события "submit" по умолчанию
        delete localStorage.user_id; // очистка локадьного хранилища
        welcome.classList.remove('welcome_active');
        alert('Локальное хранилище очищено!')
    };