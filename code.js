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



/*
Австралійський долар
code.js:18 Канадський долар
code.js:18 Юань Женьміньбі
code.js:18 Чеська крона
code.js:18 Данська крона
code.js:18 Гонконгівський долар
code.js:18 Форинт
code.js:18 Індійська рупія
code.js:18 Рупія
code.js:18 Новий ізраїльський шекель
code.js:18 Єна
code.js:18 Теньге
code.js:18 Вона
code.js:18 Мексиканське песо
code.js:18 Молдовський лей
code.js:18 Новозеландський долар
code.js:18 Норвезька крона
code.js:18 Російський рубль
code.js:18 Сінгапурський долар
code.js:18 Ренд
code.js:18 Шведська крона
code.js:18 Швейцарський франк
code.js:18 Єгипетський фунт
code.js:18 Фунт стерлінгів
code.js:18 Долар США
code.js:18 Білоруський рубль
code.js:18 Азербайджанський манат
code.js:18 Румунський лей
code.js:18 Турецька ліра
code.js:18 СПЗ (спеціальні права запозичення)
code.js:18 Болгарський лев
code.js:18 Євро
code.js:18 Злотий
code.js:18 Алжирський динар
code.js:18 Така
code.js:18 Вірменський драм
code.js:18 Домініканське песо
code.js:18 Іранський ріал
code.js:18 Іракський динар
code.js:18 Сом
code.js:18 Ліванський фунт
code.js:18 Лівійський динар
code.js:18 Малайзійський ринггіт
code.js:18 Марокканський дирхам
code.js:18 Пакистанська рупія
code.js:18 Саудівський ріял
code.js:18 Донг
code.js:18 Бат
code.js:18 Дирхам ОАЕ
code.js:18 Туніський динар
code.js:18 Узбецький сум
code.js:18 Новий тайванський долар
code.js:18 Туркменський новий манат
code.js:18 Сербський динар
code.js:18 Сомоні
code.js:18 Ларі
code.js:18 Бразильський реал
code.js:18 Золото
code.js:18 Срібло
code.js:18 Платина
code.js:18 Паладій

*/