const currentTime = document.querySelector(".time");

function updateTime() {
    const date = new Date();
    const updatedTime = date.toUTCString();

    currentTime.innerText = updatedTime;
}

updateTime();

function loadTransition() {
    document.querySelector(".profile-card").setAttribute("style", "opacity: 1");
    document
        .querySelector(".profile-card")
        .setAttribute("style", "transform: translateY(0px)");
    document
        .querySelector(".profile-card")
        .setAttribute("style", "transition: 2s");
}

document.addEventListener("DOMContentLoaded", () => {
    loadTransition();
    updateTime();
});
