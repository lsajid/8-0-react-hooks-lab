import React, { useState } from "react";
import "./NewClient.css";

const NewClient = () => {
  const [ client, setClient ] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:""
  })

  const handleInputChange = (event) => {
    setClient({...client, [event.target.name]:event.target.value })
  }
  
  return (
      <section className="new-client">
      <h4>New Client Info</h4>
      <div>
        <form>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" onChange={handleInputChange}/>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" onChange={handleInputChange}/>
          <label htmlFor="phone">Telephone</label>
          <input type="tel" id="phone" name="phone" onChange={handleInputChange}/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" onChange={handleInputChange}/>
        </form>
        <article>
          <h5>{client.firstName}</h5>
          <h5>{client.lastName}</h5>
          <h5>{client.phone}</h5>
          <h5>{client.email}</h5>
        </article>
      </div>
    </section>
  )
}

export default NewClient;