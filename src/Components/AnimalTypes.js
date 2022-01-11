import React, { useState } from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

const AnimalTypes = () => {
  const [ input, setInput ] = useState("");
  const [ animals, setAnimals ] = useState(animalTypes);

  console.log(input);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setAnimals([...animals, input]);
  }

  const handleRemove = () => {
    
  }

  const handleAdd = () => {
    
  }

  const animalTypesElArr = animals.map((animal)=> {
    return (
      <>
        <li>{animal} </li>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
      </>
      );
  });

  return(
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="type">
            <input type="text" id="animal-type" value={input} onChange={handleInputChange}/>
          </label>
          <input type="submit" />
        </form>
      <ol>{animalTypesElArr}</ol>
    </section>
  );
};

export default AnimalTypes;
