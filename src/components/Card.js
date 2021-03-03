import React from "react";

function Card(props) {
  const handleCardClick = () => {
    props.onCardClick({name: props.name, link: props.link, alt: props.name})
  }
  return(
    <>
      <img src={props.link}
        alt="Что-то с ссылкой на изображение"
        className="elements__image"
        onClick={handleCardClick}
      />
      <button type="button" className="elements__basket"></button>
      <div className="elements__group">
        <h2 className="elements__title">{props.name}</h2>
        <div className="elements__group-like">
          <button type="button" className="elements__like" aria-label="Нравится"></button>
          <p className="elements__like-count">{props.likes.length}</p>
        </div>
      </div>
    </>
  )
}

export default Card;
