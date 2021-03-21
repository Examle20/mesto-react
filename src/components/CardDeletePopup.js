function CardDeletePopup(props) {
  const card = props.card;
  const classNameOpen = props.isOpen ? 'popup_visible' : '';
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCardDelete(card)
  }
  return(
    <div className={`popup popup_delete ${classNameOpen}`}>
      <div className="popup__container">
        <p className="popup__delete-text">Вы уверены?</p>
        <button className="popup__button-save popup__button-save_verification" onClick={handleSubmit}>Да</button>
        <button type="button" className="popup__button-close" ></button>
      </div>
    </div>
  )
}

export default CardDeletePopup;
