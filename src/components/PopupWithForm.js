function PopupWithForm(props) {
  console.log(props.isOpen, 'это isOpen')
  const isOpen = props.isOpen ? 'popup_visible' : '';
  return(
    <div className={`popup popup_validation popup_${props.name} ${isOpen}`}>
      <div className="popup__container">
        <button type="button" className="popup__button-close popup__button-close_edit" aria-label="Закрыть" onClick={props.onClose}></button>
        <form action="pages/index.js" className="popup__form" name={`form_${props.name}`} noValidate>
          <h2 className="popup__title">{props.popupTitle}</h2>
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
          <button type="submit" className="popup__button-save popup__button-save_user"
                  aria-label="Сохранить">Сохранить
          </button>
          {props.children}
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
