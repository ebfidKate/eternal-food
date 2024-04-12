import { useState } from 'react'
import './App.css'
import recipes from './recipe.json';
import Recipe from './components/Recipe.jsx'
import TableOfContent from './components/TableOfContent.jsx';

function App() {
  const [index, setIndex] = useState(0);
  const [isTocEnabled, setIsTocEnabled] = useState(false)

  return (
    <div className='page'>

      <button onClick={() => { setIsTocEnabled(!isTocEnabled) }}>Table of contents</button>
      {isTocEnabled && <TableOfContent
        recipes={recipes}
        onRecipeSelected={(index) => setIndex(index)}
        onClose={() => setIsTocEnabled(false)}
      />}

      <div>
        <Recipe recipe={recipes[index]}></Recipe>
        
        <button onClick={() => setIndex(index - 1)}
          disabled={index === 0}>Prev</button>
        <button onClick={() => setIndex(index + 1)}
          disabled={index >= (recipes.length - 1)}>Next</button>
      </div>
    </div>
  )
}

export default App
