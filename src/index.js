//commands so far in BASH - npm init -y           <- in root folder
//                        - npm install react react-dom react-scripts @babel, webpack
import {createRoot} from 'react-dom/client';//imports a react lib or component
import React from "react"; //imports react 
import { useState } from 'react';
// import { fetchAllPlayers } from './asyncFunctions.js';
import { Card, renderNewPlayerForm } from "./card.js";

// const init = async () => {
//   const players = await fetchAllPlayers()
//   Card(players)

//   renderNewPlayerForm()

// };

console.log('starting mainwin and card.js');

const Mainwin = () => { 
  return ( 
    <>
    <div id='navbar'>
        <form>
          <label>Name:</label>
          <input></input>
          <label>Breed:</label>
          <input></input>  
          <button>Submit</button>  
          
          <input id='search'></input>
          <button>Search</button>
                  
        </form>
        <div id="nav">
          <p>Puppy Bowl Roster</p>
        </div>
    </div>

  <Card />
    </>
    )};





const appElement = document.getElementById("app"); // variable created to grab the app id in html


const root = createRoot(appElement); // variable created to invoke createRoot with appElement passed into it. 


root.render(<Mainwin/>); // method that renders the functions to html.

// init();