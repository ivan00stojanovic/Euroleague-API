const input  = document.getElementById('player-input')
const playersListElement = document.getElementById('players-list')

let kkczv = []



input.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    // fetchPlayers()
    input.value = '';
    loadData(kkczv,playersListElement)
    fetchPlayers()
  }
});

const checkInput = (inputed, playerOTD) =>{
    // if(input.value === comparision) console.log('svakacast') 
    console.log(inputed, playerOTD)
    if(inputed === playerOTD) console.log('Inputs match')
}


const fetchPlayers = async () => {
    const inputedPlayer = input.value.toLowerCase()
    const response = await fetch('http://localhost:1991/getInfo')
    const data = await response.json()
    kkczv = data.map(players => players.name)
    loadData(kkczv, playersListElement)
    checkInput(inputedPlayer, kkczv[0])
     const randomOne =  data[Math.floor(Math.random() * data.length)]
}



fetchPlayers()

const loadData = (data, element) => {
  if(data){
    element.innerHTML = '';
    let innerElement = '';
    data.forEach(player => {
        innerElement += `
        <li>${player}</li>`
    });
      element.innerHTML = innerElement;
  }
}

const filterData = (data, searchText) => {
 return  data.filter(player => player.toLowerCase().includes(searchText.toLowerCase()));
}

input.addEventListener('input', () => {
  const filteredData = filterData(kkczv, input.value)
  loadData(filteredData, playersListElement)
})


// const getPlayerOfTheDay = () => {

// }

//   fetchOne('nemanja nedovic');