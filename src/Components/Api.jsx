import React, { useState } from 'react'

const Api = () => {
    const[pokemon,setPokemon]=useState([])
    
    const handleClick=()=>{
        fetch("https://pokeapi.co/api/v2/pokemon-form/807")
        .then(response => {
          // not the actual JSON response body but the entire HTTP response
          console.log(response.json());
          setPokemon();
      }).then(response => {
          // we now run another promise to parse the HTTP response into usable JSON
          console.log(response);
          setPokemon(response);
      }).catch(err=>{
        setPokemon(err)
      });
        
    }
  return (
    <div>
        {pokemon}
        <button onClick={handleClick}>Get Pokemon DATA</button>
    </div>
    
  )
}

export default Api
