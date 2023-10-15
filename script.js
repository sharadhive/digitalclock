// const hourE1 =  document.getElementById("hours")
// const minuteE1 =  document.getElementById("minutes")
// const secondE1 =  document.getElementById("seconds")
// const ampmE1 =  document.getElementById("ampm")

// function updateClock() {
//     let h = new Date().getHours();
// let m = new Date().getMinutes();
// let s = new Date().getSeconds();

//     let ampm = "PM"

//     if (h > 12) {
//         h = h - 12
//         ampm = "PM"
//     }

//     hourE1.innerText = h;
//     minuteE1.innerText = m;
//     secondE1.innerText = s;
//     ampmE1,(innerText = ampm)
// setTimeout(() => {
//     updateClock()
// }, 1000);

// }
// updateClock()
////////////////////////////////////////////////////////////////////////////////////////////
// const hourE1 = document.getElementById("hours");
// const minuteE1 = document.getElementById("minutes");
// const secondE1 = document.getElementById("seconds");
// const ampmE1 = document.getElementById("ampm");

// function updateClock() {
//     let h = new Date().getHours();
//     let m = new Date().getMinutes();
//     let s = new Date().getSeconds();
//     let ampm = "PM";

//     if (h > 12) {
//         h = h - 12;
//         ampm = "PM";
//     }

//     hourE1.innerText = h;
//     minuteE1.innerText = m;
//     secondE1.innerText = s;
//     ampmE1.innerText = ampm;

//     setTimeout(() => {
//         updateClock();
//     }, 1000);
// }

// updateClock();


// script.js

const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hourElement.innerText = hours;
    minuteElement.innerText = minutes;
    secondElement.innerText = seconds;
    ampmElement.innerText = ampm;

    setTimeout(updateClock, 1000);
}

updateClock();

