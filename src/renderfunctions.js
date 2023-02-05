// import { fetchAllPlayers } from "./asyncfunctions";


// const playerContainer = document.getElementById('all-players-container');
// const newPlayerFormContainer = document.getElementById('new-player-form');


// export const renderAllPlayers = (playerList) => {

//     if (!playerList || !playerList.length) {
//       playerContainer.innerHTML = '<h3>No players to display!</h3>';
//       return;
//     }
//     let playerContainerHTML = '';
//     for (let i = 0; i < playerList.length; i++) {
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
//         renderAllPlayers(players)
//       })
//     }
//   };