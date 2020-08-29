// function to get time in hours, mintues, and seconds
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let formatHours = AMPM(hours);

  hours = convertTime(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById(
    "clock"
  ).innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
}

// Adding functionality to by placing AM and PM according to the current time
function AMPM(time) {
  let format = "AM";

  if (time >= 12) {
    format = "PM";
  }

  return format;
}

// Adding functionality to the current time to convert 24 hours to 12 hours clock
function convertTime(time) {
  if (time > 12) {
    time = time - 12;
  }

  if (time === 0) {
    time = 12;
  }

  return time;
}

// Adding functionality to show place "0" before numbers which are less than 10
function addZero(time) {
  if (time < 10) {
    time = "0" + time;
  }

  return time;
}

showTime();
setInterval(showTime, 1000);
