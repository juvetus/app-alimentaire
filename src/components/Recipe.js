import React, {useState} from 'react';
import RecepiDetails from './RecipeDetails';

const Recipe = ({recipe}) => {
  const [show, setShow] = useState(false);
  const {label, image, url, ingredients} = recipe.recipe;
  return (
    <div className="recipe">
      <h2>{label}</h2>,
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        {' '}
        Détails Info Url{' '}
      </a>
      <button onClick={() => setShow(!show)}>Ingredients</button>
     { show  && <RecepiDetails ingredients={ingredients} /> }
    </div>
  );
};

export default Recipe;
