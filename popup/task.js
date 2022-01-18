// ### Task 8.2 ###

const subscribeModal = document.getElementById('subscribe-modal'); // элемент "модальное окно"
const modalClose = document.querySelector('.modal__close'); // элемент "Х" - "закрыть окно"


/* Функция устанавливает куки с именем 'name' и значением 'value', 
с настройкой path=/ по умолчанию (можно изменить, чтобы добавить другие значения по умолчанию) */
function setCookie(name, value, options = {}) {

    options = {
      path: '/',
      // при необходимости добавьте другие значения по умолчанию
      ...options
    };
  
    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    };
  
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
    for (let optionKey in options) {
      updatedCookie += "; " + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += "=" + optionValue;
      };
    };
  
    document.cookie = updatedCookie;
  };

  
function getCookie(name) { // функция возвращает куки с указанным name, или undefined, если ничего не найдено
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  
  function deleteCookie(name) { // функция удаления cookie (через установку отрицательной даты истечения срока действия)
    setCookie(name, "", {
      'max-age': -1
    })
  };

  //deleteCookie('savedModalStatus'); // КОНТРОЛЬНАЯ ТОЧКА (очистка "печеньки")

if (getCookie('savedModalStatus') !== 'active') {   // если модалка ранее не открывалась в браузере
    subscribeModal.classList.add('modal_active'); // открываем модалку
    setCookie('savedModalStatus', 'active'); // делаем запись о событии открытия модалки в "печеньку"
};

modalClose.onclick = () => {
    subscribeModal.classList.remove('modal_active'); // клик по крестику "закрыть окно"
};

