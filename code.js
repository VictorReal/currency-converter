const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');





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
  
/*






function calculate(){
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

    fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json/`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
}

currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
amountEl_two.addEventListener('input', calculate);


calculate();






/*
const url='https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json' // 1
let characters = [] // 2
console.log(url)
fetch(url, { // 3
  method: 'GET',
}).then(function(response){
    return response.json() // 6
}).then(function(data){
    characters = data // 7
    renderCharacters(app, characters) // 8
    console.log(data)
})

// 4 function initialization
function renderCharacters(app, characters){ 
    for(const character of characters){ // 9
        console.log(`${character.cc} ${character.txt}`)
    
        const characterContainer = document.createElement('div') // 9.1
        characterContainer.classList.add('container')
        characterContainer.innerHTML = `
        <select>
            <option> ${character.txt.map}  </option>
        </select>
        ${character.txt} 
        `
        app.appendChild(characterContainer) // 9.8
    }   
}

const app = document.getElementById('app') // 5
