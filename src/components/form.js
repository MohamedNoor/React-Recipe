import React from 'react';
//form variable is created where when the recipe name is entered it then on submit checks the spi
const Form = props => (
  <form onSubmit ={props.getRecipe} style={{marginBottom: '2rem'}}>
    <input className="form__input" type="text" name="recipeName"/>
    <button className="form__button">Search</button>
  </form>
) ;

export default Form;
