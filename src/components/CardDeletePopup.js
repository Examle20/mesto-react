import PopupWithForm from "./PopupWithForm";

function CardDeletePopup(props) {
  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      children={(
        <>
          <p className="popup__delete-text">Вы уверены?</p>
        </>
      )}
    />
  )
}

export default CardDeletePopup;
