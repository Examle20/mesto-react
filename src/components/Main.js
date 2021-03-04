import React from "react";
import api from "../utils/Api";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = React.useState('Имя');
  const [userDescription, setUserDescription] = React.useState('О себе');
  const [userAvatar, setUserAvatar] = React.useState('https://miro.medium.com/max/1200/0*uCp0FlHAezZh8W0l');
  const [cards, setCards] = React.useState([])

  React.useEffect(() =>{
    api.getUser()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })

    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
  })

  return(
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__photo-group" onClick={props.onEditAvatar}>
            <img src={userAvatar}
              alt="Изображение профиля"
              className="profile__photo"
            />
          </div>
          <div className="profile__info">
            <div className="profile__main-info">
              <h1 className="profile__title">{userName}</h1>
              <button type="button" className="profile__button-edit" aria-label="Редактировать" onClick={props.onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button type="button" className="profile__button-add" aria-label="Добавить" onClick={props.onAddPlace}></button>
        </div>
      </section>

      <section className="elements">
        <ul className="elements__list">
          {cards.map((item) =>(
            <li className="elements__item" key={item._id}>
              <Card
                _id={item._id}
                link={item.link}
                name={item.name}
                likes={item.likes}
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
