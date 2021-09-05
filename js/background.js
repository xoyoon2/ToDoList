const images = ["0.jpeg", "1.jpg", "2.jpg"];
const todaySimage = images[Math.floor(images.length * Math.random())];

//background = document.createElement("img");
background = document.querySelector(".background");
background.src = `img/${todaySimage}`;
//document.body.appendChild(background);
