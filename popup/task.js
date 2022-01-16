// ### Task 8.2 ###

const subscribeModal = document.getElementById('subscribe-modal'); // элемент "модальное окно"
const modalClose = document.querySelector('.modal__close'); // элемент "Х" - "закрыть окно"

if (localStorage.getItem('savedModalStatus') !== 'active') {   // если модалка ранее не открывалась в браузере
    subscribeModal.classList.add('modal_active'); // открываем модалку
    localStorage.setItem('savedModalStatus', 'active'); // делаем запись о событии открытия модалки в хранилище
};

modalClose.onclick = () => {
    subscribeModal.classList.remove('modal_active'); // клик по крестику "закрвть окно"
};

