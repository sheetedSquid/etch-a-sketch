const sizeGrid = 16;
const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-btn");

document.addEventListener("DOMContentLoaded", display);
document.addEventListener("click", () => {
    gridContainer.innerHTML = '';
    display();
});

function display() {
    for (let i = 0; i < (sizeGrid * sizeGrid); i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        console.log('ok') 
        gridItem.addEventListener("mouseover", () => {
            gridItem.classList.add("active");
            console.log('yoyo')
        });
    }
}


