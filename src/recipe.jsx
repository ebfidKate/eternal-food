function Recipe({ recipe }) {
  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>Manual: {recipe.manual}</p>
    </div>
  );
}

export default Recipe;
