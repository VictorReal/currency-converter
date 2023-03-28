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

/*currencyEl_one.addEventListener('change', calculate); ?????sees mistake*/
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