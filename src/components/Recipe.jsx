import PropTypes from "prop-types";
import './Recipe.css'

function Recipe({ recipe }) {

  return (
    <div className="recipe">
      <img className="recipe__image" src={recipe.image}></img>
      <div className="recipe__info">
        <h1>{recipe.name}</h1>
        <h2>by {recipe.author.nickname}</h2>
        <p>Manual: {recipe.manual}</p>
      </div>
    </div>
  );
}

export default Recipe;

Recipe.propTypes = {
  recipe: PropTypes.object,
};
