const input = document.getElementById('player-input');
const playersListElement = document.getElementById('players-list');
let kkczv = [];
let randomOne = null;
let selectedOptionIndex = -1;

const fetchPlayers = async () => {
  const response = await fetch('http://localhost:1991/getInfo');
  const data = await response.json();
  kkczv = data.map((players) => players.name);
  randomOne = data[Math.floor(Math.random() * data.length)];
  console.log(randomOne.name)
  loadData(kkczv, playersListElement);
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
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    if (selectedOptionIndex > 0) {
      selectedOptionIndex -= 1;
    } else {
      selectedOptionIndex = visibleOptions.length - 1; // Loop back to the last option
    }
    highlightSelectedOption(visibleOptions);
  } else if (event.key === 'Enter') {
    event.preventDefault();
    if (selectedOptionIndex !== -1) {
      input.value = visibleOptions[selectedOptionIndex].textContent;
      selectedOptionIndex = -1;
      playersListElement.style.display = 'none';
      compareInput(input.value.toLowerCase(), randomOne.name.toLowerCase());
      input.value = '';
    }
  }
});

// Reset selectedOptionIndex to 0 after each keydown event
input.addEventListener('input', () => {
  selectedOptionIndex = -1;
});







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
