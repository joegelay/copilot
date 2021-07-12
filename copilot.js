// fetch the weather in Denver, CO and display it on the page

let weatherKey = config.WEATHER_KEY;

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=denver,us&appid=${weatherKey}&units=imperial`)
  .then(response => response.json())
  .then(json => {
    console.log(json);
    let forecast = json.list[1];
    let temp = Math.round(forecast.main.temp);
    let description = forecast.weather[0].description;
    document.getElementById('temp').innerHTML = `The temperature is ${temp}°F`;
    document.getElementById('description').innerHTML = `The weather is ${description}`;
  }
);

// find all div tags on the page and make the text bold 
let h1Tags = document.querySelectorAll('div');
for (let i = 0; i < h1Tags.length; i++) {
  h1Tags[i].style.fontWeight = 'bold';
}

// make a blue button that will increase a counter when clicked
let increaseButton = document.getElementById('increase');
let counter = document.getElementById('counter');
increaseButton.addEventListener('click', () => {
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}
);

// make increaseButton background blue
let increaseButtonStyle = document.getElementById('increase').style;
increaseButtonStyle.backgroundColor = 'blue';

// make the text of increaseButton white and 36px
increaseButtonStyle.color = 'white';
increaseButtonStyle.fontSize = '36px';

// give the coutner a red background when it reaches 10
increaseButton.addEventListener('click', () => {
  if (parseInt(counter.innerHTML) > 10) {
    counter.style.backgroundColor = 'red';
  }
}
);

// refresh the page when the counter is greater than 10
increaseButton.addEventListener('click', () => {
  if (parseInt(counter.innerHTML) > 10) {
    location.reload();
  }
} 
);



