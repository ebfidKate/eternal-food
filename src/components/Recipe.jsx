import PropTypes from "prop-types";
import './Recipe.css'
import Author from "./Author";

function Recipe({ recipe }) {

  return (
    <div className="recipe">
      <div className="recipe__title">
        <h1 className="recipe__name">{recipe.name}</h1>
        <Author author={recipe.author} />
      </div>
      <div className="recipe__img">
        <img className="recipe__image" src={recipe.image}></img>
      </div>
      <div className="recipe__info">
        <div className="ing">
          <h3 className="title ing__title">Ingredients</h3>
          <div className="ing__list">
            {recipe.ingredients.map(ing => (
              <div className="ing__info" key={ing.ingname}>
                <b>{ing.quantity}</b> {ing.ingname}
              </div>
            ))}
          </div>
        </div>
        <div className="manual">
          <h3 className="title manual__title">Manual</h3>
          <div className="manual__content">
            {recipe.manual.map((step, i) => (
              <div className="manual__step" key={i}>
                <div className="manual__step-index">{i + 1}</div>
                <div className="manual__step-description">
                  <div>{step}</div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;

Recipe.propTypes = {
  recipe: PropTypes.object,
};
