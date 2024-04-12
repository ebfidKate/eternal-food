const TableOfContent = ({ recipes, onRecipeSelected, onClose }) => {
  return (
    <div className='toc'>
          <ul>
            {recipes.map((recipe, index) => (
              <li key={recipe.id} onClick={() => {
                onRecipeSelected(index);
                onClose();
              }}>{recipe.name}</li>
            ))}
          </ul>
          <button className='closeToc'
            onClick={onClose}>X</button>
        </div>
  )
}

export default TableOfContent;
