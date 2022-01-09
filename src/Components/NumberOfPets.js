import React, { useState } from "react";
import "./NumberOfPets.css";

const NumberOfPets = () => {
  const [ count, setCount ] = useState(0);

  const handleIncrease = () => {
    setCount(prevcount => prevcount + 1);
  }

  const handleDecrease = () => {
    if( count > 0 ){
      setCount( prevcount => prevcount - 1);
    }
  }

  return (
    <section className="num-of-pets">
        <h4>Number of Pets</h4>
        <h5>{count}</h5>
        <div>
          <button id="less" onClick={handleDecrease}>-</button>
          <button id="more" onClick={handleIncrease}>+</button>
        </div>
    </section>
  )
}

export default NumberOfPets;