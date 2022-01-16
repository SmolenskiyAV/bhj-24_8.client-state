// ### Task 8.1 ###

const editor = document.getElementById('editor'); // элемент "поле для ввода текста"
const clearButton = document.getElementById('clear_button');    // кнопка
const inputLogin = document.querySelector('input[name="login"]');
const inputPassword = document.querySelector('input[name="password"]');

editor.onchange = () => {  //  обработка ввода сообщений в поле <textarea> 

    editor.textContent = localStorage.getItem('savedTextArea'); // заполнение texarea ранее введёнными данными, после перезагрузки страницы
    localStorage.setItem('savedTextArea', editor.value); // заполнение хранилища, вводимыми через поле <textarea> данными
};


clearButton.onclick = () => {
    editor.value = ""; // очистка поля <textarea>
};

