import React from "react";

function ImagePopup(props) {
  const {link, name} =props.card
  const classNameOpen = props.isOpen ? 'popup_visible' : '';
    React.useEffect(() => {
    if (props.card) document.addEventListener('keydown', props.onEscClose);

    return () => {
      document.removeEventListener('keydown', props.onEscClose);
    }
  },[props.isOpen])

  return(
    <div className={`popup popup_image ${classNameOpen}`} onClick={props.onOverlayClose}>
      <figure className="popup__image-container">
        <button
          type="button"
          className="popup__button-close popup__button-close_image"
          aria-label="Закрыть"
          onClick={props.onClose}
        >
        </button>
        <img src={link}   alt="Выбранное изображение" className="popup__image"  />
        <figcaption className="popup__image-title">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;
