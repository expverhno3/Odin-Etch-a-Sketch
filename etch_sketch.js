
function readGridSize() {
    let size = parseInt(prompt("Please enter the number of squares per side."))
    if (size && size > 0 && size<100) {
        return size
    } else{
        alert("please enter a valid number!")
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(size) {
    let totalNumber = size * size
    let squareHeight = 96 / size
    const container = document.querySelector('.container');
    removeAllChildNodes(container)
    for (let i=0; i < totalNumber; i++) {
        const item = document.createElement("div")
        item.classList.add("user-square")
        item.style.width = `${squareHeight}vw`
        item.style.height = `${squareHeight}vw`
        item.style.border = "0.5px solid pink"
        item.style.backgroundColor = "white"
        item.style.boxSizing = "border-box"
        container.appendChild(item)
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const gridSizeButton = document.querySelector("button.set-size");

    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    container.addEventListener('mouseover', function(e) {
        if (e.target.classList.contains('square') || e.target.classList.contains("user-square")) {
            e.target.style.backgroundColor = '#3498db'; // Change this color to whatever you want
        }
    });
    
    gridSizeButton.addEventListener("click", () =>{
        let size = readGridSize()
        createGrid(size)
    })
});

