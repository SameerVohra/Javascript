const clock = document.getElementById("time");
setInterval(() => {
  let time = new Date();
  clock.innerHTML = `${time.toLocaleTimeString()}`;
}, 1000);
