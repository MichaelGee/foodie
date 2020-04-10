import React from "react";
import { v4 as uuidv4 } from "uuid";

const Cards = ({ recipe }) => {
  const { label, image, ingredients, url } = recipe.recipe;

  return (
    <div>
      <div className='max-w-sm card-container rounded-lg overflow-hidden shadow-lg'>
        <div className='images'>
          <img src={image} alt='food_image' className='food-img w-full' />
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-sm sm:text-xl mb-2 sm:mb-0'>
            {label}
          </div>
          <h5 className='text-base sm:text-lg mb-0 sm:mb-2'>Ingredients: </h5>
          <ul className='text-gray-700 text-xs sm:text-base mb-0 sm:mb-2 '>
            {ingredients.map((ingredient) => (
              <li key={uuidv4()}>{ingredient.text}.</li>
            ))}
          </ul>
          <h5 className='text-lg sm:text-base mb-0 sm:mb-2'> Directions:</h5>
          <a className='text-xs sm:text-sm text-blue-300' href={url}>
            {url}
          </a>
        </div>
        <div className='px-6 py-4'></div>
      </div>
    </div>
  );
};

export default Cards;
