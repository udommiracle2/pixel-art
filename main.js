let container = document.querySelector(".grid-container");
let createGrid = document.getElementById("create-grid");
let removeGrid = document.getElementById("remove-grid");
let gridWidth = document.getElementById("width-range")
let gridHeight = document.getElementById("height-range");
let heightValue = document.getElementById("height-value");
let widthValue = document.getElementById("width-value");
let colorBtn = document.getElementById("color-selection");
let eraseBtn = document.getElementById("erase");
let paintBtn = document.getElementById("paint");
let saveBtn = document.getElementById("save");


let color = "#000";

gridHeight.oninput = () => {
    heightValue.textContent = gridHeight.value;
}

gridWidth.oninput = () => {
    widthValue.textContent = gridWidth.value;
}

createGrid.onclick = () => {
    container.innerHTML = "";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "repeat(" + gridWidth.value + ", 1fr)";


    
    for (let gridBox = 0; gridBox < gridHeight.value * gridWidth.value; gridBox++) {
        let gridCon = document.createElement("div");
        gridCon.className = 'pixel-art';
        
        gridCon.onclick = () => {
            gridCon.style.background = color;
        }

        container.appendChild(gridCon);
    }


};

colorBtn.oninput = () => {
    color = colorBtn.value;
}


eraseBtn.onclick = () => {
    color = 'transparent';
}

removeGrid.onclick = () => {
    container.innerHTML = "";
}

paintBtn.onclick = () => {
    color = colorBtn.value;
}


saveBtn.onclick = () => {
    let pixelArt = document.querySelectorAll(".pixel-art");
    let pixelArray = [];

    for (let x = 0; x < pixelArt.length; x++) {
        pixelArray.push(pixelArt[x].style.background);
    }

    localStorage.setItem("savedPixels", JSON.stringify(pixelArray));
    alert("Pixel Saved Successfully!");

}