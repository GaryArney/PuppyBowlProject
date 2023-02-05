// import { useEffect, useState} from 'react';


// const cohortName = '2211-FTB-ET-WEB-AM';
// const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
// console.log('start fetching players');

// export const fetchAllPlayers = async () => {
//     try {

//         const response = await fetch(`${APIURL}players/`);
//         const result = await response.json();
//         console.log("playerlist has been received");
//         if (result.error) {
//             throw result.error;
//         }
//         console.log('player return', result.data.players);
//         return result.data.players;
//     } catch (error) {
//         console.error('trouble fetching players', error);
//     }
// };

// export const fetchSinglePlayer = async (playerId) => {
//     try{
//         const response = await fetch(`${APIURL}players/${playerId}`);
//         const result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error('errors',error);
//     }
// };
// export const addNewPlayer = async (playerObj) => {
//     try{
//         const response = await fetch (`${APIURL}players/`,
//         { method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(playerObj),  
//     }
//         );
//         const result = await response.json();
//         console.log('result is',result);
//     } catch (err){
//         console.error('stupid error',err);
//     }
// };

// export const removePlayer = async (playerId) => { 

//     try{
//         const response = await fetch(`${APIURL}/players/${playerId}`,{
//         method: 'DELETE',
//          });
//     const result = await response.json();
//     if(result.error) throw result.error;
//     return;
//     } catch (err) {
//         console.error(
//             `Trouble removing player #${playerId} from the roster!`,
//             err
//         );
//     }
// };

// export default fetchAllPlayers;
