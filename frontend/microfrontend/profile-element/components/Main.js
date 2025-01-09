import React, { useEffect, useState } from 'react';
import Card from 'card_list/Card';

import '../blocks/profile/profile.css';
import '../blocks/places/places.css';

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  const [currentUser, setCurrentUser] = useState(null);

  const handleUserChange = event => {
    setCurrentUser(event.detail)
  }

  useEffect(() => {
    window.addEventListener("currentUser", handleUserChange);
    return () => window.removeEventListener("currentUser", handleUserChange)
  }, []);

  const imageStyle = { backgroundImage: `url(${currentUser?.avatar})` };

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser?.name}</h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
          <p className="profile__description">{currentUser?.about}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card?._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
