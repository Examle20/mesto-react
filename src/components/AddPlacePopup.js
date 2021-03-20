import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props) {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeLink = (e) => {
    setLink(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, link)
    props.onAddPlace(title, link)
  }

  React.useEffect(() => {
    setTitle('');
    setLink('');
  },[props.isOpen])
  return(
    <PopupWithForm
      name='add'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      onSubmit={handleSubmit}
      children={(
        <>
          <h2 className="popup__title popup__title_place">Новое место</h2>
          <label className="popup__form-field">
            <input id="place-input" type="text"
                   value={title || ''} onChange={handleChangeTitle}
                   className="popup__form-input popup__form-input_place popup__form-input_field_place" name="name"
                   placeholder="Название" minLength="2" maxLength="40" required autoComplete="off" />
              <span className="place-input-error popup__form-error"></span>
          </label>
          <label className="popup__form-field">
            <input id="url-input" type="url"
                   value={link || ''} onChange={handleChangeLink}
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
