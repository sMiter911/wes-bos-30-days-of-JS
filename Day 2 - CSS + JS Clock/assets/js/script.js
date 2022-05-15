const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  const secondDegrees = (seconds / 60) * 360 + 90;
  if (seconds === 0) {
    secondHand.style.transition = "all 0s";
  }

  const minuteDegrees = (minutes / 60) * 360 + 90;
  if (minutes === 0) {
    minuteHand.style.transition = "all 0s";
  }

  const hourDegrees = (hours / 12) * 360 + 90;
  if (hours === 0) {
    hourHand.style.transition = "all 0s";
  }

  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
