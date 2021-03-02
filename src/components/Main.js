function Main() {
  return(
    <main>
      <section className="profile">
        <div className="profile__user">
          <div className="profile__photo-group">
            <img src=""
                 alt="Изображение профиля" className="profile__photo" />
          </div>
          <div className="profile__info">
            <div className="profile__main-info">
              <h1 className="profile__title">Жак-Ив Куст</h1>
              <button type="button" className="profile__button-edit" aria-label="Редактировать"></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
          </div>
          <button type="button" className="profile__button-add" aria-label="Добавить"></button>
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
