const newYear="1/1/2026";
const daysEl = document.querySelector('.day');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.seconds');

function timeCountDown() {
  const nowDate = new Date();
  const newYearDate = new Date(newYear);
  const totalSeconds = (newYearDate - nowDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = formatTime(days);
  hourEl.textContent = formatTime(hours);
  minuteEl.textContent = formatTime(minutes);
  secondEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time > 10 ? time : `0${time}`;
}

timeCountDown()
setInterval(timeCountDown, 1000);
function showtime(){
  const date = new Date();
  
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session ="AM";
  console.log(hours);
  
  if(hours>12){
      hours=hours-12;
      session ="PM";
  }
  hours =(hours<10)?"0"+hours:hours;
  minutes = (minutes<10)?"0"+minutes:minutes;
  seconds = (seconds<10)?"0"+seconds:seconds;

  let time =" "+ hours+ ":" + minutes + ":"+seconds+" "+ session;
  document.querySelector("#times").innerText=time;
 
}


setInterval(function(){
  showtime();
},1000);
function updateClock() {
  const now = new Date();
  const time1 = now.toLocaleTimeString();
  const date1 = now.toLocaleDateString();
  document.getElementById("times").textContent = time1;
  document.getElementById("date").textContent = date1;
}
setInterval(updateClock, 1000);
updateClock();