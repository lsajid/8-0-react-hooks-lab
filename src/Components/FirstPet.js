import React, { useState } from "react";
import "./FirstPet.css";

const FirstPet = () => {
  const [ isChecked, setIsCheck ] = useState(false);
  
  const handleBoxCheck = () => {
    isChecked ? setIsCheck(false) : setIsCheck(true);
  }

  return (
      <section className="first-pet">
        <h4>Is this your first pet?</h4>
        <br />
        <form>
          <input type="checkbox" value={isChecked} onChange={handleBoxCheck}/>
        </form>
        {
          isChecked &&
          <h5>Yes</h5>
        }
        {
          !isChecked &&
          <h5>No</h5>
        }
    </section>
  )
}

export default FirstPet;