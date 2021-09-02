const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
]
const todaySimage = images[Math.floor(images.length * Math.random())]

background = document.createElement("img");
background.src = `img/${todaySimage}`;
document.body.appendChild(background);