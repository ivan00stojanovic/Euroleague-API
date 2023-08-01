const input = document.getElementById('player-input');
const playersListElement = document.getElementById('players-list');
let kkczv = [];
let randomOne = null;

const fetchPlayers = async () => {
  const inputedPlayer = input.value.toLowerCase();
  const response = await fetch('http://localhost:1991/getInfo');
  const data = await response.json();
  kkczv = data.map((players) => players.name);
  loadData(kkczv, playersListElement);
  randomOne = data[Math.floor(Math.random() * data.length)];
  console.log(randomOne.name)
};

const loadData = (data, element) => {
  if (data) {
    element.innerHTML = '';
    let innerElement = '';
    data.forEach((player) => {
      innerElement += `<li>${player}</li>`;
    });
    element.innerHTML = innerElement;
  }
};

const filterData = (data, searchText) => {
  return data.filter((player) => player.toLowerCase().includes(searchText.toLowerCase()));
};

input.addEventListener('input', () => {
  const filteredData = filterData(kkczv, input.value);
  loadData(filteredData, playersListElement);
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    console.log('Enter key pressed! Input value:', input.value);
    compareInput(input.value.toLowerCase(), randomOne.name.toLowerCase());
    input.value = ''
  }
});

const compareInput = (inputed, randomPlayerName) => {
  if (inputed === randomPlayerName) {
    console.log('Inputs match! Congratulations!');
  } else {
    console.log('Inputs do not match. Keep trying!');
  }
};

// Fetch players when the page loads
fetchPlayers();
