const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.round(Math.random() * hex.length)];
  }

  return color;
};

let interval;

const startChangingColor = () => {
  if (!interval) {
    interval = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(interval);
  interval = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
