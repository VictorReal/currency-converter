const API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

let currencyData = null;
/* fetch part*/
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
    const uahData = { /* creating UAH object*/
      r030: 36,
      txt: ' Українська гривня',
      rate: 1,
      cc: 'UAH',
      exchangedate: data[0].exchangedate,
      exchangeRate: 1
    };
    currencyData = data.slice().map(curr => ({
      ...curr,
      exchangeRate: curr.rate / curr.rate
    }));
    /* adding UAH object, deleting rub and byn, sorting by ABC */
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
/*rendering first part*/
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
/*rendering second part*/
function renderPart2(fromCurrencyCode, toCurrencyCode, exchangeRate) {
  const part2Div = document.querySelector('#part2');
  if (part2Div) {
    part2Div.innerHTML = `
      <h2>${fromCurrencyCode} to ${toCurrencyCode} Rate: ${exchangeRate}</h2>
    `;
  }else {
    const part1Div = document.querySelector('#part1');
    part1Div.innerHTML += `
      <div id="part2">
        <h2>${fromCurrencyCode} to ${toCurrencyCode} Rate: ${exchangeRate}</h2>
      </div>
    `;
  }
}

getData();
