import { useState } from 'react'
import './App.css'
import recipes from './recipe.json';
import Recipe from './recipe.jsx';

function App() {
  const [index, setIndex] = useState(0);
  const [isTocEnabled, setIsTocEnabled] = useState(false)

  return (
    <div className='page'>

      <button onClick={() => { setIsTocEnabled(!isTocEnabled) }}>Table of contents</button>
      {isTocEnabled &&
        <div className='toc'>
          <ul>
            {recipes.map(recipe => (
              <li key={recipe.id} onClick={() => {
                setIndex(recipes.indexOf(recipe));
                setIsTocEnabled(false);
              }}>{recipe.name}</li>
            ))}
          </ul>
          <button className='closeToc'
            onClick={() => setIsTocEnabled(!isTocEnabled)}>X</button>
        </div>}

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
