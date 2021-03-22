import React from "react";

function CardDeletePopup(props) {
  const card = props.card;
  const classNameOpen = props.isOpen ? 'popup_visible' : '';
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCardDelete(card)
  }
  React.useEffect(() => {
    props.onEscClose(props.isOpen);
  },[props.isOpen])
  return(
    <div className={`popup popup_delete ${classNameOpen}`} onClick={props.onOverlayClose}>
      <div className="popup__container">
        <p className="popup__delete-text">Вы уверены?</p>
        <button className="popup__button-save popup__button-save_verification" onClick={handleSubmit}>{props.buttonTitle}</button>
        <button type="button" className="popup__button-close" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default CardDeletePopup;
