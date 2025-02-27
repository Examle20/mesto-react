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
import api from "../utils/api";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isCardDeletePopupOpen, setIsCardDeletePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({link:'', name: ''});
  const [isPopupWithImageOpen, setIsPopupWithImageOpen] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({});
  const [selectedDeletionCard, setSelectedDeletionCard] = React.useState('')
  const [cards, setCards] = React.useState([])

  const [buttonSave, setButtonSave] = React.useState('Сохранить');
  const [buttonCreate, setButtonCreate] = React.useState('Создать');
  const [buttonDelete, setButtonDelete] = React.useState('Да')

  const [isButtonSaveUser, setIsButtonSaveUser] = React.useState(false);
  const [isButtonSavePlace, setIsButtonSavePlace] = React.useState(false);
  const [isButtonSaveAvatar, setIsButtonSaveAvatar] = React.useState(false);


  const handleStateButtonEdit = (boolean) => {
    setIsButtonSaveUser(boolean);
  }

  const handleStateButtonPlace = (boolean) => {
    setIsButtonSavePlace(boolean);
  }

  const handleStateButtonAvatar = (boolean) => {
    setIsButtonSaveAvatar(boolean);
  }

  React.useEffect(() =>{
    api.getUser()
      .then((res) => {
        setCurrentUser(res);
      },)
      .catch(err => console.log(err))

    api.getInitialCards()
      .then((res) => {
        setCards(res);
        console.log(res)
      })
      .catch(err => console.log(err))
  },[])

  const handleButtonState = (setButton, buttonTitle) => {
    setButton(buttonTitle);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err));
  }

  function handleCardDelete(card) {
    handleButtonState(setButtonDelete, 'Удаление...')
    api.removeCard(card._id)
      .then((res) => {
        const newCards = cards.filter(newCard => newCard._id !== card._id);
        setCards(newCards);
        closeAllPopups();
        handleButtonState(setButtonDelete, 'Да')
      })
      .catch(err => console.log(err))
  }

  const handleAddPlace = (name, link) => {
    handleButtonState(setButtonCreate,'Создание...')
    api.addCard(name, link)
      .then(res => {
        setCards([res, ...cards]);
        closeAllPopups();
        handleButtonState(setButtonCreate,'Создать')
      })
      .catch(err => console.log(err))
  }

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
    setSelectedCard(card);
    setIsPopupWithImageOpen(true)
  }

  const handleDeleteSelectedCard = (card) => {
    setSelectedDeletionCard(card);
  }

  const handleBasketClick = () => {
    setIsCardDeletePopupOpen(!isCardDeletePopupOpen);
  }

  const escClose = (evt) => {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
  }

  const handleEscClose = (isOpen) => {
    if(isOpen) document.addEventListener('keydown', escClose);
  }

  const handlePressingMouse = (evt) => {
      if (evt.target.classList.contains('popup')) {
        closeAllPopups();
      }
  }

  //Параметры передаются для плавного закрытия попапа с изображением
  const closeAllPopups = () => {
    document.removeEventListener("keydown", escClose)
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsCardDeletePopupOpen(false);
    setIsPopupWithImageOpen(false);
  }

  const handleUpdateUser = ({name, about}) => {
    handleButtonState(setButtonSave,'Сохранение...')
    api.editUserInfo(name, about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        handleButtonState(setButtonSave,'Сохранить')
      })
  }

  const handleUpdateAvatar = (avatar) => {
    handleButtonState(setButtonSave,'Сохранение...')
    api.changeAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
        handleButtonState(setButtonSave,'Сохранить')
      })
      .catch(err => {
        console.log(err)
      })
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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleDeleteSelectedCard}
          />
          <Footer />
        </div>
        <EditProfilePopup
          name='edit'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onEscClose={handleEscClose}
          onOverlayClose={handlePressingMouse}
          onUpdateUser={handleUpdateUser}
          onButtonActive={handleStateButtonEdit}
          isButtonActive={isButtonSaveUser}
          buttonTitle={buttonSave}
        />
        <AddPlacePopup
          name='add'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onEscClose={handleEscClose}
          onOverlayClose={handlePressingMouse}
          onAddPlace={handleAddPlace}
          buttonTitle={buttonCreate}
          onButtonActive={handleStateButtonPlace}
          isButtonActive={isButtonSavePlace}
        />
        <EditAvatarPopup
          name='avatar'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onEscClose={handleEscClose}
          onOverlayClose={handlePressingMouse}
          buttonTitle={buttonSave}
          onUpdateAvatar={handleUpdateAvatar}
          onButtonActive={handleStateButtonAvatar}
          isButtonActive={isButtonSaveAvatar}
        />
        <CardDeletePopup
          isOpen={isCardDeletePopupOpen}
          onClose={closeAllPopups}
          onEscClose={handleEscClose}
          onOverlayClose={handlePressingMouse}
          onCardDelete={handleCardDelete}
          card={selectedDeletionCard}
          buttonTitle={buttonDelete}
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
