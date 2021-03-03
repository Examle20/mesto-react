function ImagePopup(props) {
  const classNameOpen = props.card.isOpen ? 'popup_visible' : '';
  return(
    <div className={`popup popup_image ${classNameOpen}`}>
      <figure className="popup__image-container">
        <button
          type="button"
          className="popup__button-close popup__button-close_image"
          aria-label="Закрыть"
          onClick={props.onClose}
        >
        </button>
        <img src={props.card.link} alt="Выбранное изображение" className="popup__image" />
        <figcaption className="popup__image-title">{props.card.name}</figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;
