const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

let clickCounter = 0;

buttonA.onclick = () => {
    clickCounter++; 

    headingA.textContent = `You've clicked ${clickCounter} times.`;
    headingA.style.color = "blue"; 

    if (clickCounter >= 5) {
        headingA.style.color = "black"; 
        clickCounter = 0; 
    }
};
