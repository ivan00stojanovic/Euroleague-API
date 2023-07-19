const input  = document.getElementById('player-input')



const checkInput = (inputed, playerOTD) =>{
    // if(input.value === comparision) console.log('svakacast') 
    console.log(inputed, playerOTD)
    if(inputed === playerOTD) console.log('sagggg')
}


input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetchPlayers()
      input.value = '';
    }
  });

const fetchPlayers = async () => {
    const inputedPlayer = input.value.toLowerCase()
    const response = await fetch('http://localhost:1991/getInfo')
    const data = await response.json()
    // console.log(data[0].name.toLowerCase())
    checkInput(inputedPlayer, data[0].name.split(' ')[0].toLowerCase())
     const randomOne =  data[Math.floor(Math.random() * data.length)]
}

// const fetchOne = async (playerName) => {
//     try {
//       const response = await fetch(`/api/players/${playerName}`);
//       if (response.ok) {
//         const player = await response.json();
//         console.log(player);
//       } else {
//         console.error('Error:', response.status);
//       }
//     } catch (error) {
//       console.error('Error fetching player:', error);
//     }
//   };



// const getPlayerOfTheDay = () => {

// }


//   fetchOne('nemanja nedovic');


console.log('duvaj ga')