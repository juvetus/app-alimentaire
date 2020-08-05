import React, {useState} from 'react';
import Axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Recipe from './components/Recipe';
import Alert from './components/Alert';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState('');

  const APP_ID = '36b98c9a';
  const APP_KEY = 'a99762a28d5fc0adab4015398e707dcd';

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== '') {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setAlert(`Pas d'aliment avec le nom recherché assayer encore`);
      }
      setRecipes(result.data.hits);
      console.log(result);
      setAlert('');
      setQuery('');
    } else {
      setAlert('Merci de remplir le formulaire');
    }
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="container">
      <div className="App">
        <h1 onClick={getData}>App Alimentaire </h1>
        <form className="search-form" onSubmit={onSubmit}>
          {alert !== '' && <Alert alert={alert} />}
          <input
            type="text"
            placeholder="Recherche Aliments"
            autoComplete="off"
            onChange={onChange}
            value={query}
          />
          <input type="submit" value="Recherche" />
        </form>
        <div className="recipes">
          {recipes !== [] &&
            recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
        </div>
      </div>
    </div>
  );
};

export default App;
