function Main() {

  const handleEditAvatarClick = () => {
    document.querySelector('.popup_avatar').classList.add('popup_visible')
  }

  const handleEditProfileClick = () => {
    document.querySelector('.popup_edit').classList.add('popup_visible')
  }

  const handleAddPlaceClick = () => {
    document.querySelector('.popup_add').classList.add('popup_visible')
  }

  return(
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__photo-group" onClick={handleEditAvatarClick}>
            <img src=""
                 alt="Изображение профиля" className="profile__photo" />
          </div>
          <div className="profile__info">
            <div className="profile__main-info">
              <h1 className="profile__title">Жак-Ив Куст</h1>
              <button type="button" className="profile__button-edit" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" className="profile__button-add" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
        </div>
      </section>

      <section className="elements">
        <ul className="elements__list">

        </ul>
      </section>
    </main>
  )
}

export default Main;
