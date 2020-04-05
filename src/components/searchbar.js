import React, { useState, useEffect } from "react";
import "../styles/main.css";
import SearchIcon from "../search.svg";
import Cards from "./cards";
import axios from "axios";

const Searchbar = () => {
  const url = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/";
  const api = "ff9d0678f577bcae1260e1e436ca35d6";
  const id = "4d71ca3d";
  const [name, setName] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    /* Fetch the recipe API */
    const getRecipe = async () => {
      const response = await axios.get(
        `${url}search?q=${name}&app_id=${id}&app_key=${api}`
      );
      setRecipe(response.data);
    };
    getRecipe();
  }, [search]);

  console.log(recipe);

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <div className='search w-6/12 m-auto '>
        <div className='icon inset-y-0 left-0 pl-4 flex items-center absolute pointer-events-none'>
          <img src={SearchIcon} alt='search_icon' className='w-4 icon' />
        </div>
        <form onSubmit={onSubmit} className='input-form'>
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
            onClick={() => setSearch(name)}
            type='button'
            className='search_botton px-6 py-2 border rounded text-black border-pink-800 hover:text-white hover:bg-pink-800 hover:border-pink-800'
          >
            Search
          </button>
        </form>
      </div>
      <Cards />
    </div>
  );
};

export default Searchbar;
