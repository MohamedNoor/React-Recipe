import React from 'react';


const Recipes = props => (
  <div className="container">
    <div className="row">
      { props.recipes.map((recipe) => {
        //returns the recipe titles in a new array
        return (
          //key must be present in the parent element
          <div key={recipe.title} className="col-md-4" style={{marginBottom: '2rem'}}>
            <div className="recipes__box">
              <img className="recipe__box-img"
              src={recipe.image_url}
              alt={recipe.title}
              />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.title}
                </h5>
                <p className="recipes__subtitle">
                  publisher: <span>{recipe.publisher}</span>
                </p>
              </div>
              <button className="recipe_buttons">
                <a href={recipe.source_url}  rel="noopener noreferrer"  target="_blank">View Publisher</a>
              </button>
            </div>
          </div>
        );
      }) }
    </div>
  </div>
);

export default Recipes;
