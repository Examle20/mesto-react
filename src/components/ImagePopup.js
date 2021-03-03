function ImagePopup() {
  return(
    <div className="popup popup_image">
      <figure className="popup__image-container">
        <button type="button" className="popup__button-close popup__button-close_image" aria-label="Закрыть"></button>
        <img src="" alt="Выбранное изображение" className="popup__image" />
        <figcaption className="popup__image-title"></figcaption>
      </figure>
    </div>
  )
}

export default ImagePopup;
