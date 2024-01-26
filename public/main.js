const input = document.getElementById('player-input');
const playersListElement = document.getElementById('players-list');
let fetchArray = [];
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
const answerContainer = document.querySelector('.table-container')

// TODO
// 1. Make li options clickable
// 2. Make the autocomplete go over the result table, not break the box model
// 3. Make the table a fix width, so that longer names don't widen it
// 4. Play around with the UI, help the user if they're close to an answer(age/height ~ 2, ex club, etc. )
// 5. Add up down arrows for the user for help DONE
// 6. Might redesign the input



const fetchPlayers = async () => {
  const response = await fetch('http://localhost:1991/getInfo');
  const data = await response.json();
  fetchArray = data.map((players) => players.name);
  allPlayersArray = data
  // console.log(allPlayersArray[0].jerseyNumber)
  // fetchArray = data
  // randomOne = data[Math.floor(Math.random() * data.length)];
  playerOTD = getPlayerOTD(data)
  console.log(playerOTD)
  loadData(fetchArray, playersListElement);
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

 playersListElement.addEventListener('click', (event) => {
  const clickedItem = event.target;
  if (clickedItem.tagName === 'LI') {
      input.value = clickedItem.textContent;
      playersListElement.style.display = 'none';
      input.focus(); // Keep focus on the input for a better user experience
      const inputedPlayer = allPlayersArray.find(inputedPlayer => inputedPlayer.name === input.value);
      instructions.removeAttribute('id', 'player-list');
      counter++;
      htmlGenerator(allAnswers[counter], inputedPlayer);
      compareInput(input, playerOTD);
      input.value = '';
      input.placeholder = `Guess ${counter + 1} of 6`;
      answerContainer.scrollTop = answerContainer.scrollHeight;
      // if(counter > 7)
  }
});


input.addEventListener('input', () => {
  const searchText = input.value.trim();
  if (searchText.length === 0) {
    playersListElement.style.display = 'none'; // Hide autocomplete list
  } else {
    const filteredData = filterData(fetchArray, searchText);
    loadData(filteredData, playersListElement);
    playersListElement.style.display = 'block'; // Show autocomplete list
  }
});

// let isKeyboardNavigation = false;

input.addEventListener('keydown', (event) => {
  const searchText = input.value.trim();
  const options = playersListElement.querySelectorAll('li');
  const visibleOptions = Array.from(options).slice(0, 4);

  // Check if input is empty before handling arrow key events
  if (searchText.length > 0) {
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
    // if(inputedPlayer || allPlayersArray.includes(input.value)){
    // console.log(inputedPlayer)
    // event.preventDefault();
    instructions.removeAttribute('id', 'player-list')
    if (selectedOptionIndex !== -1 || inputedPlayer)  {
      console.log(inputedPlayer)
      input.value = visibleOptions[selectedOptionIndex].textContent;
      selectedOptionIndex = -1;
      playersListElement.style.display = 'none';
      counter++
      htmlGenerator(allAnswers[counter], inputedPlayer)
      compareInput(input, playerOTD);
      input.value = '';
      input.placeholder =  `Guess ${counter+1} of 6`
      answerContainer.scrollTop = answerContainer.scrollHeight
    }
  // } 
  }
  // Add event listener for mouseover on options
options.forEach((option, index) => {
  option.addEventListener('mouseover', () => {
    selectedOptionIndex = index;
    highlightSelectedOption(visibleOptions);
    input.value = visibleOptions[selectedOptionIndex].textContent;
  });
});
  }
});

// Reset selectedOptionIndex to 0 after each keydown event
input.addEventListener('input', () => {
  selectedOptionIndex = -1;
});

const htmlGenerator = (tableRow, playerGenerated) => {
  
  tableRow.innerHTML = ` <tr>
  <td class="generated-name">${playerGenerated.name}</td>
  <td>
    <div class="generated-team">
      <img width="50px" height="60px" src="${playerGenerated.team[0]}" alt="red star">
      <span class="team-text ">${playerGenerated.team[1]}</span>
    </div>
      </td>
  <td class="generated-position">${playerGenerated.position.join(' - ')}</td>
  <td class="generated-height">${playerGenerated.height}  </td>
  <td class="generated-age">${playerGenerated.age}</td>
  <td class="generated-jersey-number">${playerGenerated.jerseyNumber}</td>
  </tr>`
  tableRow.classList.remove('visibility')
  
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

  // compareAge(inputedPlayer, randomPlayerName, currentRow)
  // compareJersey(inputedPlayer,randomPlayerName,currentRow)
  // compareHeight(inputedPlayer,randomPlayerName,currentRow)
  // comparePosition(inputedPlayer,randomPlayerName,currentRow)
  // compareTeam(inputedPlayer,randomPlayerName,currentRow)
  // isItCorrect(inputedPlayer,randomPlayerName,currentRow)
  // compareTeam(inputedPlayer,randomPlayerName,currentRow)
  compareFuntionsArray.forEach(comparision => comparision(inputedPlayer, randomPlayerName, currentRow))
  if (inputed.value.toLowerCase() === randomPlayerName.name.toLowerCase()) {
    // console.log('Inputs match! Congratulations!');
  } else {
    // console.log('Inputs do not match. Keep trying!');
  }
  
};

const upArrow = `<span class ="arrow"> &#8593</span>`
const downArrow = `<span class ="arrow"> &#8595;</span>`
const arrowDirection = (inputValue, correctValue, data) => {
  if(inputValue > correctValue) data.innerHTML += /* `<br>` + */   downArrow
  if(inputValue < correctValue) data.innerHTML += /* `<br>` + */   upArrow
}


const animateGreen = (td) => {
  td.classList.remove('green-bg-add'); // reset animation
  void td.offsetWidth; // trigger reflow
  td.classList.add('green-bg-add'); // start animation
}

const animateYellow = (td) => {
  td.classList.remove('yellow-bg-add'); // reset animation
  void td.offsetWidth; // trigger reflow
  td.classList.add('yellow-bg-add'); // start animation
}

const compareAge = (x, y, tdAge) => {
  const age = tdAge.querySelector('.generated-age')
  if(x.age === y.age){
   animateGreen(age)
  }else if(Math.abs(x.age - y.age) <= 2){
    animateYellow(age)
  }
  arrowDirection(x.age, y.age, age)

}

const compareJersey = (x, y, tdJersey) => {
  const jerseyNumber = tdJersey.querySelector('.generated-jersey-number')
  if(x.jerseyNumber === y.jerseyNumber){
    animateGreen(jerseyNumber)
  }else if(Math.abs(x.jerseyNumber - y.jerseyNumber) <= 2){
    animateYellow(jerseyNumber)
  }
  arrowDirection(x.jerseyNumber, y.jerseyNumber, jerseyNumber)
  // appearanceAnimation(jerseyNumber)
}

const compareHeight = (x, y, tdHeight) => {
  const height = tdHeight.querySelector('.generated-height')
  if(x.height === y.height){
    animateGreen(height)
  }else if(Math.abs(x.height - y.height) <= 5){
    animateYellow(height)
  }
  arrowDirection(x.height, y.height, height)
  // appearanceAnimation(height)    
}


const comparePosition = (x, y, tdPosition) => {
  const position = tdPosition.querySelector('.generated-position')
  const commonPositions = y.position.filter(playerPosition => x.position.includes(playerPosition))
  
  if(commonPositions.length === y.position.length && commonPositions.length == x.position.length){
    animateGreen(position)
  }else if(commonPositions.length > 0){
    animateYellow(position)
  }
  console.log(x.position, y.position)
  // appearanceAnimation(position)
}

const compareTeam = (x, y, tdTeam) => {
  const team = tdTeam.querySelector('.generated-team')
  if(x.team[1] === y.team[1]){ 
    animateGreen(team)
  }else if(x.team[1] !== y.team[1] && y.team.includes(x.team[1])){
    animateYellow(team)
    // appearanceAnimation(team)
  }
}

const winnerDeclaration = document.getElementById('winner-declaration')
const winnerText = document.getElementById('winner-text')
const restartBtn = document.getElementById('restart-after-win')
const test = document.querySelector('.body') 

const isItCorrect = (x, y, tdName) => {
  const name = tdName.querySelector('.generated-name')
  if(x.name === y.name){ 
    animateGreen(name)
    test.classList.add('blurry')
    input.disabled = true
    // winnerDeclaration.classList.toggle('show-winner')
  }
  // appearanceAnimation(name)
}

const compareFuntionsArray = [compareAge, compareJersey, compareHeight, comparePosition, compareTeam, isItCorrect]


// Fetch players when the page loads
fetchPlayers();


// CHECKLIST
//  Test out giving the user yellow bg's when he's close in a field
//  CSS => Differentiate the instruction table from the guesses
//  Modify the compareInput function to check for every property between the playerOTD
//  That's it for now i guess 