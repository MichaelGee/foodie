import React, { useEffect, useState } from "react";
import "../styles/main.css";
import SearchIcon from "../search.svg";
import axios from "axios";
const Searchbar = () => {
  const url = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/";
  const api = "ff9d0678f577bcae1260e1e436ca35d6";
  const id = "4d71ca3d";
  const [name, setName] = useState("");

  const getRecipe = async () => {
    axios
      .get(`${url}search?q=${name}&app_id=${id}&app_key=${api}`)
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div className='search '>
        <div className='icon inset-y-0 left-0 pl-4 flex items-center absolute pointer-events-none'>
          <img src={SearchIcon} alt='search_icon' className='w-4 icon' />
        </div>
        <input
          id='search_form'
          className='outline-none transition-colors w-full duration-100 ease-in-out  border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-sm bg-gray-200 py-2 pr-4 pl-10 block appearance-none leading-normal ds-input'
          type='text'
          placeholder='Search for recipe..'
          autoComplete='off'
          spellCheck='true'
          dir='auto'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button
          onClick={() => getRecipe()}
          class='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Button
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
