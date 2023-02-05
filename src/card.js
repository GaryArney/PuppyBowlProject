import React from "react";
import { useState, useEffect } from "react";
import { addNewPlayer, fetchAllPlayers, fetchSinglePlayer, removePlayer } from './asyncFunctions.js';


// const playerContainer = document.getElementById('all-players-container');
// const newPlayerFormContainer = document.getElementById('new-player-form');

// export const Card = (playerList) => {

//    let playerContainerHTML = '';
//    for (let i = 0; i < playerList.length; i++) {
//       const pup = playerList[i];                                          
//       let pupHTML = `
//         <div class="single-player-card">
//           <div class="header-info">
//             <p class="pup-title">${pup.name}</p>
//             <p class="pup-number">#${pup.id}</p>
//           </div>
//           <img src="${pup.imageUrl}" alt="photo of ${pup.name} the puppy">
//           <button class="detail-button" data-id=${pup.id}>See details</button>     
//           <button class="delete-button" data-id=${pup.id}>Delete Doggo</button> 
//         </div>
//       `;
//       playerContainerHTML += pupHTML;
//     }
//     playerContainer.innerHTML = playerContainerHTML;
//     let detailButtons = [...document.getElementsByClassName('detail-button')];
//     for (let i = 0; i < detailButtons.length; i++) {
//       const button = detailButtons[i];
//       button.addEventListener('click', async () => {
//          const pup = playerList[i];
//         fetchSinglePlayer(pup.id);     
//       return renderSinglePlayer(pup);
//       });
//     }
//     let deleteButton = [...document.getElementsByClassName('delete-button')];
//     for (let i = 0; i < deleteButton.length; i++){
//       deleteButton[i].addEventListener('click', async () => {
//         await removePlayer(deleteButton[i].dataset.id);
//         const players= await fetchAllPlayers()
//         Card(players)
//       })
//     }
//   };

//   export const renderSinglePlayer = (playerObj) => {
//    if (!playerObj || !playerObj.id) {
//      playerContainer.innerHTML = "<h3>Couldn't find data for this player!</h3>";
//      return;
//    }
//    let pupHTML = `
//      <div class="single-player-view">
//        <div class="header-info">
//          <p class="pup-title">${playerObj.name}</p>
//          <p class="pup-number">#${playerObj.id}</p>
//        </div>
//        <p>Team: ${playerObj.team ? playerObj.team.name : 'Unassigned'}</p>
//        <p>Breed: ${playerObj.breed}</p>
//        <img src="${playerObj.imageUrl}" alt="photo of ${
//      playerObj.name
//    } the puppy">
//        <button id="see-all">Back to all players</button>
//      </div>
//    `;
//    playerContainer.innerHTML = pupHTML;
//    let backButton = document.getElementById('see-all');
//      const button = backButton; 
//      button.addEventListener('click', async () => {
//        const players = await fetchAllPlayers();
//        Card(players);
//      })
//  };
 
 
 
//  export const renderNewPlayerForm = () => {
//    let formHTML = `
//      <form>
//        <label for="name">Name:</label>
//        <input type="text" name="name" />
//        <label for="breed">Breed:</label>
//        <input type="text" name="breed" />
//        <button type="submit">Submit</button>
//        <label for="search">
//      </form>
//    `;
//    newPlayerFormContainer.innerHTML = formHTML;
//    let form = document.querySelector('#new-player-form > form');
//    form.addEventListener('submit', async (event) => {
//      event.preventDefault();
//      let inputs = form.elements;
//      let playerData = {
//        name: inputs['name'].value,
//        breed: inputs['breed'].value,
//      }
//      addNewPlayer(playerData);
//      newPlayerFormContainer.innerHTML = formHTML; //added to clear form 
//      const players = await fetchAllPlayers();
 
//      Card(players, fetchAllPlayers());
 
//    });
   
//  };
 
 




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

  // const renderPlayers = () => {

  //   let playerContainerHTML = '';
  //   for (let i = 0; i < )

  // }

 }
 export { Card };