import '../App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
function App() {
  return (
    <div className="App">
      <div className="page">
      <Header />
      <Main />
      <Footer />
      </div>
      <div className="popup popup_edit popup_validation">
        <div className="popup__container">
          <button type="button" className="popup__button-close popup__button-close_edit" aria-label="Закрыть"></button>
          <form action="pages/index.js" className="popup__form" name="form_edit" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
            <label className="popup__form-field">
              <input id="name-input" type="text" className="popup__form-input popup__form-input_field_name" name="user"
                     placeholder="Имя" minLength="2" maxLength="40" required autoComplete="off" />
                <span className="name-input-error popup__form-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="about-input" type="text" className="popup__form-input popup__form-input_field_about"
                     name="about" placeholder="О себе" minLength="2" maxLength="200" required autoComplete="off" />
                <span className="about-input-error popup__form-error"></span>
            </label>
            <button type="submit" className="popup__button-save popup__button-save_user"
                    aria-label="Сохранить">Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_add popup_validation">
        <div className="popup__container popup__container_add">
          <button type="button" className="popup__button-close popup__button-close_add" aria-label="Закрыть"></button>
          <form action="pages/index.js" className="popup__form" name="form_addPlace" noValidate>
            <h2 className="popup__title popup__title_place">Новое место</h2>
            <label className="popup__form-field">
              <input id="place-input" type="text"
                     className="popup__form-input popup__form-input_place popup__form-input_field_place" name="name"
                     placeholder="Название" minLength="2" maxLength="40" required autoComplete="off" />
                <span className="place-input-error popup__form-error"></span>
            </label>
            <label className="popup__form-field">
              <input id="url-input" type="url"
                     className="popup__form-input popup__form-input_place popup__form-input_field_url" name="link"
                     placeholder="Ссылка на картинку" required autoComplete="off" />
                <span className="url-input-error popup__form-error"></span>
            </label>
            <button type="submit" className="popup__button-save popup__button-save_place" aria-label="Сохранить"
                    disabled>Создать
            </button>
          </form>
        </div>
      </div>

      <div className="popup popup_image">
        <figure className="popup__image-container">
          <button type="button" className="popup__button-close popup__button-close_image" aria-label="Закрыть"></button>
          <img src="" alt="Выбранное изображение" className="popup__image" />
            <figcaption className="popup__image-title"></figcaption>
        </figure>
      </div>
      <div className="popup popup_delete">
        <div className="popup__container">
          <p className="popup__delete-text">Вы уверены?</p>
          <button className="popup__button-save popup__button-save_verification">Да</button>
          <button type="button" className="popup__button-close"></button>
        </div>
      </div>

      <div className="popup popup_avatar">
        <div className="popup__container">
          <h2 className="popup__title popup__title_place">Обновить аватар</h2>
          <form action="" className="popup__form" noValidate>
            <label className="popup__form-field">
              <input id="avatar-input" type="url" className="popup__form-input popup__form-input_avatar-url"
                     name="avatar" placeholder="Ссылка на картинку" required autoComplete="off" />
                <span className="avatar-input-error popup__form-error"></span>
            </label>
            <button type="submit" className="popup__button-save" aria-label="Сохранить" disabled>Сохранить</button>
          </form>

          <button type="button" className="popup__button-close"></button>
        </div>
      </div>
      <template className="elements__template">
        <li className="elements__item">
          <img src="" alt="Что-то с ссылкой на изображение"
               className="elements__image" />
            <button type="button" className="elements__basket"></button>
            <div className="elements__group">
              <h2 className="elements__title"></h2>
              <div className="elements__group-like">
                <button type="button" className="elements__like" aria-label="Нравится"></button>
                <p className="elements__like-count"></p>
              </div>
            </div>
        </li>
      </template>
    </div>
  );
}

export default App;
