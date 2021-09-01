const clock = document.querySelector(".clock");

function getClock() {
    const date = new Date();
    let ampm = "PM";
    if (date.getHours() < 12) {
        ampm = "AM";
    }
    let hour = String(date.getHours()).padStart(2, "0");
    if (date.getHours() === 0) {
        hour = "12";
    }
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${minute}:${second} ${ampm}`;
}
getClock();
setInterval(getClock, 1000);
