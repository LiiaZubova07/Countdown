const items = document.querySelectorAll('.countdown-item > h4');
const countdownElement = document.querySelector('.countdown');

//Назначаю дату отсчёта
let countdownDate = new Date(2022, 11, 10, 22, 25, 0).getTime();

function getCountdownTime() {
  //Получаю текущее время
  const now = new Date().getTime();
  //Нахожу разницу времени
  const distance = countdownDate - now;
  //1с = 100мс
  //1м = 60с
  //1ч = 60м
  //1д = 24ч

  //Создаю переменные в мс
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //Подсчитываю дни, часы, минуты, секунды
  let days = Math.floor(distance / oneDay);
  let hours = Math.floor((distance % oneDay) / oneHour);
  let minutes = Math.floor((distance % oneHour) / oneMinute);
  let seconds = Math.floor((distance % oneMinute) / 1000);

  //Создаю массив с переменными
  const values = [days, hours, minutes, seconds];
 
  //Добавляю значения переменных на страницу
  items.forEach(function (item, index) {
    item.textContent = values[index];
  });

  if (distance < 0) {
    clearInterval(countdown);
	 countdownElement.innerHTML = "<h4 class='expired'>Time is over</h4>";
  }
}
//Обновление счётчика каждую секунду
let countdown = setInterval(getCountdownTime, 1000);

//Инициализация текущего времени
getCountdownTime();
