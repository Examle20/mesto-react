import PopupWithForm from "./PopupWithForm";
import React from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import Input from "./Input";
function EditProfilePopup(props) {

  const [name, setName]  = React.useState('');
  const [description, setDescription] = React.useState( '');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
   setName(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name)
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return(
    <PopupWithForm
      name='edit'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onEscClose={props.onEscClose}
      onOverlayClose={props.onOverlayClose}
      buttonTitle={props.buttonTitle}
      onSubmit={handleSubmit}
      isButtonActive={props.isButtonActive}
      onButtonActive={props.onButtonActive}
      children={(
      <>
        <h2 className="popup__title">Редактировать профиль</h2>
        <label className="popup__form-field">
          <Input
            name='name'
            type='text'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            value={name || ''}
            onChange={handleChangeName}
            isButtonActive={props.isButtonActive}
            onButtonActive={props.onButtonActive}
            />
          {/*<input id="name-input" type="text"  value={name || ''} onChange={handleChangeName} className="popup__form-input popup__form-input_field_name" name="user"*/}
          {/*       placeholder="Имя" minLength="2" maxLength="40" required autoComplete="off" />*/}
          {/*<span className="name-input-error popup__form-error"></span>*/}
        </label>
        <label className="popup__form-field">
          <Input
            name='about'
            type='text'
            placeholder='Имя'
            minLength='2'
            maxLength='200'
            value={description || ''}
            onChange={handleChangeDescription}
            isButtonActive={props.isButtonActive}
            onButtonActive={props.onButtonActive}
          />
          {/*<input id="about-input" type="text" className="popup__form-input popup__form-input_field_about"*/}
          {/*       name="about" placeholder="О себе" minLength="2" maxLength="200" required autoComplete="off" value={description || ''} onChange={handleChangeDescription}/>*/}
          {/*<span className="about-input-error popup__form-error"></span>*/}
        </label>
      </>
    )}
    />
  )
}

export default EditProfilePopup;
