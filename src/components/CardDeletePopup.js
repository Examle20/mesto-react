import PopupWithForm from "./PopupWithForm";

function CardDeletePopup(props) {
  const card = props.card;
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCardDelete(card)
  }
  return(
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      onSubmit={handleSubmit}
      children={(
        <>
          <p className="popup__delete-text">Вы уверены?</p>
        </>
      )}
    />
  )
}

export default CardDeletePopup;
