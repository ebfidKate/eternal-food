import { useState } from 'react'
import './App.css'
import recipes from './recipe.json';
import Recipe from './components/Recipe.jsx'
import TableOfContent from './components/TableOfContent.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function App() {
  const [isTocEnabled, setIsTocEnabled] = useState(false)

  return (
    <div className='page'>
      <button onClick={() => { setIsTocEnabled(!isTocEnabled) }}>Table of contents</button>
      {
        isTocEnabled && <TableOfContent
          recipes={recipes}
          onClose={() => setIsTocEnabled(false)}
        />
      }
      <Swiper
        slidesPerView={1}
      >
        {recipes.map(recipe => (
          <SwiperSlide key={recipe.id}>
            <Recipe recipe={recipe}></Recipe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App
