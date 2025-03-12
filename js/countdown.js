let time = 300;
setInterval(() => {
  if (time > 0) {
    time--;
    document.getElementById("timer").innerText = new Date(time * 1000)
      .toISOString()
      .substr(14, 5);
  }
}, 1000);
