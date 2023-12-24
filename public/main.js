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
const allAnswers = ['filler', answer1, answer2, answer3, answer4, answer5, answer6]
const instructions = document.querySelector('.instructions')

// TODO
// 1. Make li options clickable
// 2. Make the autocomplete go over the result table, not break the box model
// 3. Make the table a fix width, so that longer names don't widen it
// 4. Play around with the UI, help the user if they're close to an answer(age/height ~ 2, ex club, etc. )
// 5. Add up down arrows for the user for help



const fetchPlayers = async () => {
  const response = await fetch('http://localhost:1991/getInfo');
  const data = await response.json();
  kkczv = data.map((players) => players.name);
  allPlayersArray = data
  // console.log(allPlayersArray[0].jerseyNumber)
  // kkczv = data
  // randomOne = data[Math.floor(Math.random() * data.length)];
  playerOTD = getPlayerOTD(data)
  console.log(playerOTD)
  loadData(kkczv, playersListElement);
};

const getPlayerOTD = (data) => {
  const winningPlayer = data[Math.floor(Math.random() * data.length)]
  // console.log(winningPlayer)
  return winningPlayer
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
    // console.log(allPlayersArray)
    // console.log(test)
    event.preventDefault();
    instructions.removeAttribute('id', 'player-list')
    if (selectedOptionIndex !== -1) {
      input.value = visibleOptions[selectedOptionIndex].textContent;
      selectedOptionIndex = -1;
      playersListElement.style.display = 'none';
      counter++
      htmlGenerator(allAnswers[counter], inputedPlayer)
      compareInput(input, playerOTD);
      input.value = '';
      input.placeholder =  `Guess ${counter} of 6`
      
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
    <div class="generated-team">
      <img width="50px" height="60px" src="${playerGenerated.team[0]}" alt="red star">
      <span class="team-text ">${playerGenerated.team[1]}</span>
    </div>
      </td>
  <td class="generated-position">${playerGenerated.position.join(' / ')}</td>
  <td class="generated-height">${playerGenerated.height}  </td>
  <td class="generated-age">${playerGenerated.age}</td>
  <td class="generated-jersey-number">${playerGenerated.jerseyNumber}</td>
  </tr>`

  const generatedAge = tableRow.querySelector('.generated-age')
  // console.log(tableRow, '<<<<====tableRow')
  // console.log(generatedAge,'<<<<==== generatedAge from tableRow')
  // generatedAge.classList.add('close-yellow-bg')
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
  const inputedPlayer = allPlayersArray.find(inputedPlayer => inputedPlayer.name === input.value)
  let currentRow = allAnswers[counter]
  const testing = currentRow.querySelector('.generated-age')
  // console.log(currentRow, '<<<<====currentRow')
  // console.log(testing, '<<<<==== generatedAge from jaje')

  compareAge(inputedPlayer, randomPlayerName, currentRow)
  compareJersey(inputedPlayer,randomPlayerName,currentRow)
  compareHeight(inputedPlayer,randomPlayerName,currentRow)
  comparePosition(inputedPlayer,randomPlayerName,currentRow)
  compareTeam(inputedPlayer,randomPlayerName,currentRow)
  // compareTeam(inputedPlayer,randomPlayerName,currentRow)
  if (inputed.value.toLowerCase() === randomPlayerName.name.toLowerCase()) {
    // console.log('Inputs match! Congratulations!');
  } else {
    // console.log('Inputs do not match. Keep trying!');
  }
};

const upArrow = `<span class ="arrow"> &#8593</span>`
const downArrow = `<span class ="arrow"> &#8595;</span>`

const compareAge = (x, y, tdAge) => {
  const age = tdAge.querySelector('.generated-age')
  if(x.age === y.age){
    age.classList.add("green-bg-add")
  }else if(Math.abs(x.age - y.age) <= 5){
    age.classList.add('yellow-bg-add')
  }

  if(x.age > y.age) age.innerHTML += downArrow
  if(x.age < y.age) age.innerHTML += upArrow
}

const compareJersey = (x, y, tdJersey) => {
  const jerseyNumber = tdJersey.querySelector('.generated-jersey-number')
  if(x.jerseyNumber === y.jerseyNumber){
    jerseyNumber.classList.add("green-bg-add")
  }else if(Math.abs(x.jerseyNumber - y.jerseyNumber) <= 5){
    jerseyNumber.classList.add('yellow-bg-add')
  }

  if(x.jerseyNumber > y.jerseyNumber) jerseyNumber.innerHTML += downArrow
  if(x.jerseyNumber < y.jerseyNumber) jerseyNumber.innerHTML += upArrow
}

const compareHeight = (x, y, tdHeight) => {
  const height = tdHeight.querySelector('.generated-height')
  // height.innerHTML += x.height > y.height ? downArrow : upArrow
  if(x.height === y.height){
    height.classList.add("green-bg-add")
  
  }else if(Math.abs(x.height - y.height) <= 5){
    height.classList.add('yellow-bg-add')
  }

  if(x.height > y.height) height.innerHTML += downArrow
  if(x.height < y.height) height.innerHTML += upArrow
    }

const comparePosition = (x, y, tdPosition) => {
  const position = tdPosition.querySelector('.generated-position')
  const commonPositions = y.position.filter(playerPosition => x.position.includes(playerPosition))
  
  if(commonPositions.length === y.position.length && commonPositions.length == x.position.length){
    position.classList.add("green-bg-add")
  }else if(commonPositions.length > 0){
    position.classList.add('yellow-bg-add')
  }
  console.log(x.position, y.position)
}

const compareTeam = (x, y, tdTeam) => {
  const team = tdTeam.querySelector('.generated-team')
  if(x.team[1] === y.team[1]){ 
    team.classList.add('green-bg-add')
  }else if(x.team[1] !== y.team[1] && x.team.includes(y.team[1])){
    team.classList.add('yellow-bg-add')
  }

}




// const yesirq = () => {
//   return console.log('probno 2')
// }


// const yesirw = () => {
//   return console.log('probno 2')
// }

// const yesire = () => {
//   return console.log('probno 3')
// }

// let rrr = [yesirq, yesirw, yesire]

// rrr.forEach(x => x())




// Fetch players when the page loads
fetchPlayers();


// CHECKLIST
//  Test out giving the user yellow bg's when he's close in a field
//  CSS => Differentiate the instruction table from the guesses
//  Modify the compareInput function to check for every property between the playerOTD
//  That's it for now i guess 