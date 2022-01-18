// ### Task 8.1 ###

const editor = document.getElementById('editor'); // элемент "поле для ввода текста"
const clearButton = document.getElementById('clear_button');    // кнопка

editor.textContent = localStorage.getItem('savedTextArea'); // заполнение texarea ранее введёнными данными, после перезагрузки страницы

editor.onchange = () => {  //  обработка ввода сообщений в поле <textarea> 
    localStorage.setItem('savedTextArea', editor.value); // заполнение хранилища, вводимыми через поле <textarea> данными
};

clearButton.onclick = () => {
    editor.value = ""; // очистка поля <textarea>
    localStorage.removeItem('savedTextArea');  // очистка хранилища
};

