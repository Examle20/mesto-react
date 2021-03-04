import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      children={(
        <>
          <h2 className="popup__title popup__title_place">Новое место</h2>
          <label className="popup__form-field">
            <input id="place-input" type="text"
                   className="popup__form-input popup__form-input_place popup__form-input_field_place" name="name"
                   placeholder="Название" minLength="2" maxLength="40" required autoComplete="off" />
              <span className="place-input-error popup__form-error"></span>
          </label>
          <label className="popup__form-field">
            <input id="url-input" type="url"
                   className="popup__form-input popup__form-input_place popup__form-input_field_url" name="link"
                   placeholder="Ссылка на картинку" required autoComplete="off" />
              <span className="url-input-error popup__form-error"></span>
          </label>
        </>
      )}
    />
  )
}

export default AddPlacePopup;
