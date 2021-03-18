import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return(
    <PopupWithForm
      name='edit'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      children={(
      <>
        <h2 className="popup__title">Редактировать профиль</h2>
        <label className="popup__form-field">
          <input id="name-input" type="text" className="popup__form-input popup__form-input_field_name" name="user"
                 placeholder="Имя" minLength="2" maxLength="40" required autoComplete="off" />
          <span className="name-input-error popup__form-error"></span>
        </label>
        <label className="popup__form-field">
          <input id="about-input" type="text" className="popup__form-input popup__form-input_field_about"
                 name="about" placeholder="О себе" minLength="2" maxLength="200" required autoComplete="off" />
          <span className="about-input-error popup__form-error"></span>
        </label>
      </>
    )}
    />
  )
}

export default EditProfilePopup;
