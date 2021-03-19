import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
function Main(props) {
  const [cards, setCards] = React.useState([])
  const currentUser = React.useContext(CurrentUserContext)

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.removeCard(card._id)
      .then((res) => {
        const newCards = cards.filter(newCard => newCard._id !== card._id);
        setCards(newCards);
      })
      .catch(err => console.log(err))
  }

  React.useEffect(() =>{
    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => console.log(err))
  },[])


  return(
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__photo-group" onClick={props.onEditAvatar}>
            <img
              src={currentUser.avatar}
              alt="Изображение профиля"
              className="profile__photo"
            />
          </div>
          <div className="profile__info">
            <div className="profile__main-info">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button type="button" className="profile__button-edit" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
          <button type="button" className="profile__button-add" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((item) =>(
            <li className="elements__item" key={item._id}>
              <Card
                card={item}
                onCardLike = {handleCardLike}
                onCardDelete = {handleCardDelete}
                onCardClick={props.onCardClick}
                onBasketClick={props.onBasketClick}
              />
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Main;
