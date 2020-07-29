import React from 'react';

import style from './recipe.module.css';

const Recipe = ({title, calories, image, ingredients}) => {
  return  (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ul className={style.ingredients}>
        {ingredients.map(ingredient => (
          <li key={ingredient.index}>
          {ingredient.text}
          </li>
          ))}
      </ul>
      <p><strong>{Math.round(calories)} calories</strong></p>
      <img src={image} alt="amazing food" className={style.image}/>
    </div>
    );
}

export default Recipe;
