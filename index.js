/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(input) {
  const time = input.split(":");
  const x = parseInt(time[0]);

  if (x < 12) {
    return `Good Morning`;
  }
  else if (12 < x && x < 17) {
    return `Good Afternoon`;
  }
  else if (x >= 17) {
    return `Good Evening`;
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  const greeting = document.getElementById('greeting');
  greeting.innerHTML = string;
}
