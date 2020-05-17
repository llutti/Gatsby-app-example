import React from 'react'

import cardStyles from './card.module.scss';

const Card = () =>
{
  return (
    <div className={cardStyles.card}>
      <h1>Title Card</h1>
      <h1 className={cardStyles.h1}>Title 2 Card</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum nesciunt facere quidem voluptas quis libero voluptatem esse soluta asperiores odio ut, quisquam fugit est qui itaque saepe optio vitae ducimus!</p>
      <button>Button Card</button>
    </div>
  )
}

export default Card
