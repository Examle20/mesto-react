import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value)
  }

  return(
    <PopupWithForm
      name='avatar'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      onSubmit={handleSubmit}
      children={(
        <>
          <h2 className="popup__title popup__title_place">Обновить аватар</h2>
          <label className="popup__form-field">
            <input id="avatar-input" type="url" className="popup__form-input popup__form-input_avatar-url" name="avatar"
                   placeholder="Ссылка на картинку" required autoComplete="off" ref={avatarRef} />
              <span className="avatar-input-error popup__form-error"></span>
          </label>
        </>
      )}
    />
  )
};

export default EditAvatarPopup;
