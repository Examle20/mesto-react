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
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import api from "../utils/Api";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({link:'', name: ''});
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState('');

  React.useEffect(() =>{
    api.getUser()
      .then((res) => {
        setCurrentUser(res);
      },)
      .catch(err => console.log(err))

  },[])


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  const handleCardClick = (card) => {
    console.log(card)
    setSelectedCard(card);
    setIsPopupWithImageOpen(true)
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
    setIsCardDeletePopupOpen(false);
    setIsPopupWithImageOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          name='edit'
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
          name='avatar'
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
          isOpen={isPopupWithImageOpen}
          onOverlayClose={handlePressingMouse}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
