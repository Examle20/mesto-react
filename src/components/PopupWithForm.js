import React from "react";
function PopupWithForm(props) {
  const classNameOpen = props.isOpen ? 'popup_visible' : '';

  React.useEffect(() => {
    props.onEscClose(props.isOpen);
  },[props.isOpen, props.onEscClose])


  return(
    <div className={`popup popup_validation popup_${props.name} ${classNameOpen}`} onClick={props.onOverlayClose}>
      <div className="popup__container">
        <button type="button" className="popup__button-close popup__button-close_edit" aria-label="Закрыть" onClick={props.onClose}></button>
        <form action="pages/index.js" className="popup__form" name={`form_${props.name}`} noValidate onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className="popup__button-save popup__button-save_user" aria-label="Сохранить">{props.buttonTitle} </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
