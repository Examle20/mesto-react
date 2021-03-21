import React from "react";
function PopupWithForm(props) {
  const classNameOpen = props.isOpen ? 'popup_visible' : '';
  const buttonInactive = props.isButtonActive ? '' : 'popup__button-save_inactive'
  console.log('Proverka')
  const elementsRef = React.useRef()
  React.useEffect(() => {
    const inputsList = Array.from(elementsRef.current.elements);
    const isInputsValid = inputsList.every((elem) => elem.validity.valid)
    console.log(isInputsValid)
    if(isInputsValid) {
      props.onButtonActive(true)
    }else{
      props.onButtonActive(false)
    }
  },)

  React.useEffect(() => {
    props.onEscClose(props.isOpen);
  },[props.isOpen, props.onEscClose])


  return(
    <div className={`popup popup_validation popup_${props.name} ${classNameOpen}`} onClick={props.onOverlayClose}>
      <div className="popup__container">
        <button type="button" className="popup__button-close popup__button-close_edit" aria-label="Закрыть" onClick={props.onClose}></button>
        <form ref={elementsRef} action="pages/index.js" className="popup__form" name={`form_${props.name}`} noValidate onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className={`popup__button-save popup__button-save_user ${buttonInactive}`} aria-label="Сохранить">{props.buttonTitle} </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;
