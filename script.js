let hr = document.getElementById("hour");
let mi = document.getElementById("min");
let sc = document.getElementById("sec");

function display() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 30*hh + mm/2;
    let mRotate = 6*mm;
    let sRotate = 6*ss;

    hr.style.transform = `rotate(${hRotate}deg)`;
    mi.style.transform = `rotate(${mRotate}deg)`;
    sc.style.transform = `rotate(${sRotate}deg)`;


}

setInterval(display, 1000);


const darkMode = document.getElementById('darkmode-toggle');

darkMode.onclick = function() {
    document.body.classList.toggle('dark-theme');
}