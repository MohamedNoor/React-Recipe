import React, { Component } from 'react';
import './App.css';
import Form from './components/form';
import Recipes from './components/recipes';
/*get Recipe method is created where the request is made to initailly get the recipe from the API*/

const API_KEY = "505002556eda4931bb0284ba710e9d1c";


class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async(e) => {
    //what ever is writtern will be the thing that is searched
    const recipeName = e.target.elements.recipeName.value;
    //prevents page from refreshing
    e.preventDefault();
    // cant make request as it blocks local server so added https://cors-anywhere.herokuapp.com/ in front of it to trick it
    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);
    // to grab data we created a new const called data
    //we converted the api call to jason format
    const data = await api_call.json();
    //setting the recipe state to data
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
