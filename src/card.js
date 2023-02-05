import React from "react";
import { useState, useEffect } from "react";


const Card = () => {

  const [players, setPlayers] = useState([])

  useEffect( ()=>{
      fetchPlayers()
  }, []
  )

  const fetchPlayers = async() => {
      try{
          const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-AM/players')
          const result = await response.json();
          console.log(result,"should contain player data");
          console.log(result.players);
              setPlayers(result.results)
      }
      catch(err){
          return "error"
      }
  }


 }
 export { Card };