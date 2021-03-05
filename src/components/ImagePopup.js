import React from "react";

function ImagePopup(props) {
  const classNameOpen = props.card.isOpen ? 'popup_visible' : '';
    React.useEffect(() => {
    if (props.card.isOpen) document.addEventListener('keydown', props.onEscClose);

    return () => {
      document.removeEventListener('keydown', props.onEscClose);
    }
  },[props.card.isOpen])

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
        <img src={props.card.link}   alt="Выбранное изображение" className="popup__image"  />
        <figcaption className="popup__image-title">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;
