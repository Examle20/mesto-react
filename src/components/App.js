import React from "react";
import '../App.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import CardDeletePopup from "./CardDeletePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleCardClick = ({link, name, alt}) => {
    setSelectedCard({isOpen:true, link: link, name: name, alt: alt});
  }

  const handleBasketClick = () => {
    setIsCardDeletePopupOpen(!isCardDeletePopupOpen);
  }

  const handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }

  }

  const handlePressingMouse = (evt) => {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
  }

  //Параметры передаются для плавного закрытия попапа с изображением
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
    setIsCardDeletePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onBasketClick={handleBasketClick}
        />
        <Footer />
      </div>

      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onEscClose={handleEscClose}
        onOverlayClose={handlePressingMouse}
        buttonTitle="Сохранить"
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onEscClose={handleEscClose}
        onOverlayClose={handlePressingMouse}
        buttonTitle="Создать"
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onEscClose={handleEscClose}
        onOverlayClose={handlePressingMouse}
        buttonTitle="Сохранить"
      />
      <CardDeletePopup
        isOpen={isCardDeletePopupOpen}
        onClose={closeAllPopups}
        onEscClose={handleEscClose}
        onOverlayClose={handlePressingMouse}
        buttonTitle="Да"
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        onEscClose={handleEscClose}
        onOverlayClose={handlePressingMouse}
      />
    </div>
  );
}

export default App;
