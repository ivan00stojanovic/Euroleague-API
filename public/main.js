const input = document.getElementById('player-input');
const playersListElement = document.getElementById('players-list');
let kkczv = [];
let allPlayersArray = []
// let randomOne = null;
let playerOTD = null;
let selectedOptionIndex = -1;
let counter = 0
const answer1 = document.querySelector('.answer-1')
const answer2 = document.querySelector('.answer-2')
const answer3 = document.querySelector('.answer-3')
const answer4 = document.querySelector('.answer-4')
const answer5 = document.querySelector('.answer-5')
const answer6 = document.querySelector('.answer-6')
const allAnswers = [answer1, answer2, answer3, answer4, answer5, answer6]
const instructions = document.querySelector('.instructions')



const fetchPlayers = async () => {
  const response = await fetch('http://localhost:1991/getInfo');
  const data = await response.json();
  kkczv = data.map((players) => players.name);
  allPlayersArray = data
  console.log(allPlayersArray[0].jerseyNumber)
  // kkczv = data
  // randomOne = data[Math.floor(Math.random() * data.length)];
  playerOTD = getPlayerOTD(data)
  console.log(playerOTD)
  loadData(kkczv, playersListElement);
};

const getPlayerOTD = (data) => {
  return data[Math.floor(Math.random() * data.length)]
}


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
  return  data.filter(player => typeof player === 'string' && player.toLowerCase().includes(searchText.toLowerCase()));
 }

input.addEventListener('input', () => {
  const searchText = input.value.trim();
  if (searchText.length === 0) {
    playersListElement.style.display = 'none'; // Hide autocomplete list
  } else {
    const filteredData = filterData(kkczv, searchText);
    loadData(filteredData, playersListElement);
    playersListElement.style.display = 'block'; // Show autocomplete list
  }
});

input.addEventListener('keydown', (event) => {
  const searchText = input.value.trim();
  const options = playersListElement.querySelectorAll('li');
  const visibleOptions = Array.from(options).slice(0, 4);

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    if (selectedOptionIndex < visibleOptions.length - 1) {
      selectedOptionIndex += 1;
    } else {
      selectedOptionIndex = 0; // Loop back to the first option
    }
    highlightSelectedOption(visibleOptions);
    input.value = visibleOptions[selectedOptionIndex].textContent;
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (selectedOptionIndex > 0) {
      selectedOptionIndex -= 1;
    } else {
      selectedOptionIndex = visibleOptions.length - 1; // Loop back to the last option
    }
    highlightSelectedOption(visibleOptions);
    input.value = visibleOptions[selectedOptionIndex].textContent;
  } else if (event.key === 'Enter') {
    const inputedPlayer = allPlayersArray.find(inputedPlayer => inputedPlayer.name === input.value)
    console.log(inputedPlayer)
    // console.log(kkczv)
    console.log(allPlayersArray)
    // console.log(test)
    event.preventDefault();
    instructions.removeAttribute('id', 'player-list')
    if (selectedOptionIndex !== -1) {
      input.value = visibleOptions[selectedOptionIndex].textContent;
      selectedOptionIndex = -1;
      playersListElement.style.display = 'none';
      compareInput(input.value.toLowerCase(), playerOTD.name.toLowerCase());
      counter++
      input.value = '';
      // console.log(counter)
      input.placeholder =  `Guess ${counter} of 6`
      // allAnswers[counter].innerHTML = ` <tr>
      // <td>${inputedPlayer.name}</td>
      // <td>
      // <img width="80px" height="60px" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/KK_Crvena_zvezda_logo.svg/800px-KK_Crvena_zvezda_logo.svg.png" 
      // alt="red star"></td>
      // <td>${inputedPlayer.position}</td>
      // <td>${inputedPlayer.height}</td>
      // <td>${inputedPlayer.age}</td>
      // <td>${inputedPlayer.jerseyNumber}</td>
      // </tr>`
      htmlGenerator(allAnswers[counter], inputedPlayer)
  // console.log(allAnswers[counter])
    }
  }
});

// Reset selectedOptionIndex to 0 after each keydown event
input.addEventListener('input', () => {
  selectedOptionIndex = -1;
});

const htmlGenerator = (tableRow, playerGenerated) => {
  tableRow.innerHTML = ` <tr>
  <td>${playerGenerated.name}</td>
  <td>
  <img width="80px" height="60px" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/KK_Crvena_zvezda_logo.svg/800px-KK_Crvena_zvezda_logo.svg.png" 
  alt="red star"></td>
  <td>${playerGenerated.position.join(' / ')}</td>
  <td>${playerGenerated.height}</td>
  <td>${playerGenerated.age}</td>
  <td>${playerGenerated.jerseyNumber}</td>
  </tr>`

  // if(playerGenerated.age === 32) 
}

const highlightSelectedOption = (options) => {
  options.forEach((option, index) => {
    if (index === selectedOptionIndex) {
      option.classList.add('selected');
    } else {
      option.classList.remove('selected');
    }
  });
};

const compareInput = (inputed, randomPlayerName) => {
  if (inputed === randomPlayerName) {
    console.log('Inputs match! Congratulations!');
  } else {
    console.log('Inputs do not match. Keep trying!');
  }
};



// Fetch players when the page loads
fetchPlayers();