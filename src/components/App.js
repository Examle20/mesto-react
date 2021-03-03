import React from "react";
import '../App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
      <Header />
      <Main
        onEditProfile = {handleEditProfileClick}
        onAddPlace = {handleAddPlaceClick}
        onEditAvatar = {handleEditAvatarClick}
      />
      <Footer />
    </div>
    <PopupWithForm
      name="edit"
      isOpen={isEditProfilePopupOpen}
      popupTitle = "Редактировать профиль"
      onClose ={closeAllPopups}
    />
    <PopupWithForm
      name="add"
      isOpen={isAddPlacePopupOpen}
      popupTitle = "Добавить место"
      onClose ={closeAllPopups}
    />
    <PopupWithForm
      name = "avatar"
      isOpen = {isEditAvatarPopupOpen}
      popupTitle = "Обновить аватар"
      onClose ={closeAllPopups}
    />
    <ImagePopup />

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
