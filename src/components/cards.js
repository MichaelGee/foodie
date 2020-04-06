import React from "react";

const Cards = ({ recipe }) => {
  const { label, image } = recipe.recipe;

  return (
    <div>
      <div className='max-w-sm card-container  rounded overflow-hidden shadow-lg'>
        <div className='images'>
          <img src={image} alt='food_image' className='food-img w-full' />
        </div>
        <div className='px-6 py-4'>
          <div className='font-bold text-xl mb-2'>{label}</div>
          <p className='text-gray-700 text-base'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className='px-6 py-4'></div>
      </div>
    </div>
  );
};

export default Cards;
