
import {createRoot} from 'react-dom/client';
import { useState } from 'react';

import { Card, renderNewPlayerForm } from "./card.js";



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





const appElement = document.getElementById("app"); 


const root = createRoot(appElement); 


root.render(<Mainwin/>);

