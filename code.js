const API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

let currencyData = null;

function getData() {
  fetch(API_URL)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to fetch data from API');
    }
  })
  .then(data => {
    const uahData = { // create new object for UAH
      r030: 36,
      txt: ' Українська гривня',
      rate: 1,
      cc: 'UAH',
      exchangedate: data[0].exchangedate,
      exchangeRate: 1 // set exchange rate to 1
    };
    currencyData = data.slice().map(curr => ({
      ...curr,
      exchangeRate: curr.rate / curr.rate
    })); // Only display the first 10 currencies for brevity

    currencyData.unshift(uahData);
    currencyData = currencyData.filter(curr => curr.cc !== 'RUB' && curr.cc !== 'BYN');
    currencyData.sort((a, b) => {
      if (a.txt < b.txt) {
        return -1;
      } else if (a.txt > b.txt) {
        return 1;
      } else {
        return 0;
      }
    });
    

    console.log(currencyData);
    renderPart1(currencyData);
  })
  .catch(error => {
    console.error(error);
  });

}

function renderPart1(currency) {
  const currencyList = document.querySelector('#currencyList');
  const targetCurrencyList = document.querySelector('#targetCurrencyList');
  currency.forEach(curr => {
    const optionItem = document.createElement('option');
    optionItem.textContent = curr.txt;
    optionItem.value = curr.cc;
    currencyList.appendChild(optionItem);

    const targetOptionItem = document.createElement('option');
    targetOptionItem.textContent = curr.txt;
    targetOptionItem.value = curr.cc;
    targetCurrencyList.appendChild(targetOptionItem);
  });
  const calculateButton = document.querySelector('#calculateButton');
  calculateButton.addEventListener('click', () => {
    const selectedCurrencyCode = currencyList.value;
    const selectedCurrency = currencyData.find(curr => curr.cc === selectedCurrencyCode);
    const targetCurrencyCode = targetCurrencyList.value;
    const targetCurrency = currencyData.find(curr => curr.cc === targetCurrencyCode);
    const amount = document.querySelector('#amountInput').value;
    if (selectedCurrency && targetCurrency && amount) {
      const exchangeRate = targetCurrency.rate / targetCurrency.exchangeRate;
      const result = amount * (selectedCurrency.rate / selectedCurrency.exchangeRate) / exchangeRate;
      renderPart2(selectedCurrencyCode, targetCurrencyCode, result.toFixed(2));
    }
  });
}

function renderPart2(fromCurrencyCode, toCurrencyCode, exchangeRate) {
  const part2Div = document.querySelector('#part2');
  if (part2Div) {
    part2Div.innerHTML = `
      <h2>${fromCurrencyCode} to ${toCurrencyCode} Rate: ${exchangeRate}</h2>
    `;
  } else {
    const part1Div = document.querySelector('#part1');
    part1Div.innerHTML += `
      <div id="part2">
        <h2>${fromCurrencyCode} to ${toCurrencyCode} Rate: ${exchangeRate}</h2>
      </div>
    `;
  }
}

getData();








/*const url='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json/'
let characters = []

fetch(url, {
  method: 'GET',
}).then(function(response){
    return response.json()
}).then(function(data){
    characters = data
    console.log(characters)  
    renderCharacters(app, characters)
})

function renderCharacters(app, characters){ 
  console.log(characters) 
  const part1Div = document.querySelector('#app');
  part1Div.innerHTML = `
  <section >
        <label for="money">What type ?</label>
        <input list="moneys" id="money" name="money">
        <datalist id="moneys">
        <option id="part2"></option> 
        </datalist>
      </section>
  `
  const part2Div = document.querySelector('#part2');
  part2Div.innerHTML = `
  ${character.txt}`
    for(const character of characters){
        const characterContainer = document.createElement('div')
        characterContainer.classList.add('container')
        characterContainer.innerHTML = `
        d

        <!-- ${character.txt}(${character.cc}) =  ${character.rate} 
        
        <section >
        <label for="money">What type ?</label>
        <input list="moneys" id="money" name="money">
        <datalist id="moneys">
          <option value="${character.cc}"></option>
        </datalist>
      </section>
        
        --> 
        `
        app.appendChild(characterContainer)
    }
}

const app = document.getElementById('app')















/*
const url='https://swapi.dev/api/people/' // 1
let characters = [] // 2

fetch(url, { // 3
  method: 'GET',
}).then(function(response){
    return response.json() // 6
}).then(function(data){
    characters = data.results // 7
    renderCharacters(app, characters) // 8
})

// 4 function initialization
function renderCharacters(app, characters){ 
    for(const character of characters){ // 9
        const characterContainer = document.createElement('div') // 9.1
        characterContainer.classList.add('container')
        characterContainer.innerHTML = `
            <p class="name"> ${character.name} </p>
            <p> Height: ${character.height}cm </p>
            <p> Mass: ${character.mass}kg </p>
            <p> Hair: ${character.hair_color}</p>
            <p> Skin: ${character.skin_color}</p>
            <p> Eye color: ${character.eye_color}</p>
            <p> Birth year: ${character.birth_year}</p>
            <p> Gender: ${character.gender}</p>
            <p id="homeworld"> Homeworld: </p>
            <p> Films: ${character.films[0]}</p>
            <p> Species: ${character.species}</p>
            <p> Vehicles:  </p>
            <p> Starships: ${character.starships[0]}</p>
        `
        app.appendChild(characterContainer) // 9.8
    }   
}

const app = document.getElementById('app') // 5

/*
- creating currency list in HTML -v
- creating connection with html and js values -v
- fetch with currency API:                  -x
1 adding link
https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json/
another API:
https://api.apilayer.com/exchangerates_data/convert?to=usd&from=uah&amount=37
2 adding event listeners 

*/
/*

const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');




function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
}

/*currencyEl_one.addEventListener('change', calculate); ?????sees mistake
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);

calculate();
const app = document.getElementById('app')



/*
another way


var myHeaders = new Headers();
myHeaders.append("apikey", "xPQxycteiclKxyIaNHGowCqU5EYAJjqa");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
console.log(myHeaders)
fetch("https://api.apilayer.com/exchangerates_data/convert?to=usd&from=uah&amount=37", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  
*/