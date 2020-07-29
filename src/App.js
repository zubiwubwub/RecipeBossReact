import React, {useEffect, useState} from 'react';

import Recipe from './Recipe';

import './App.css';

const App = () => {

  const APP_ID = '396c02ed';
  const APP_KEY = '33ebb43fa2058b475973a84d02ed12fd';


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('Pasta');

  useEffect( () => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
  <div className="App">
    <form className="search-form" onSubmit={getSearch}>
    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
    <button className="search-button" type="submit">
      Search
    </button>
    </form>
    <div className="recipes">
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label}
                key={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
                />
        ))}
    </div>
  </div>
    );
};
export default App;
