const body = document.querySelector('#body');
const bulb = document.querySelector('#bulb');
const toggleButton = document.querySelector('#toggle-button');
const btnStatus = document.querySelector('#status');

toggleButton.addEventListener('click', function () {
    changeBody();
    glowBulb();
    changeBtnText();
    changeBulbStatus();
})

function changeBody() {
    if (body.style.backgroundColor === "" || body.style.backgroundColor === "white") {
        body.style.backgroundColor = "black";
        body.style.color = "white";
        
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";

    }
}

function glowBulb() {
    bulb.classList.toggle("on");
}

function changeBtnText() {
    if (toggleButton.innerText === "Turn On") {
        toggleButton.innerText = "Turn Off"
    } else {
        toggleButton.innerText = "Turn On"
    }
}

function changeBulbStatus() {
    if (toggleButton.innerText === "Turn On") {
        btnStatus.innerText = "Status: Off"
    } else {
        btnStatus.innerText = "Status: On"
    }
}