const elements = {
    "Hydrogen": "H",
    "Helium": "He",
    "Lithium": "Li",
    "Beryllium": "Be",
    "Boron": "B",
    "Carbon": "C",
    "Nitrogen": "N",
    "Oxygen": "O",
    "Fluorine": "F",
    "Neon": "Ne"
};

let currentElement;

function generateElement() {
    const elementNames = Object.keys(elements);
    currentElement = elementNames[Math.floor(Math.random() * elementNames.length)];
    
    document.getElementById('element-name').textContent = `What is the symbol for ${currentElement}?`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('element-symbol').value = '';
}

function checkElement() {
    const userSymbol = document.getElementById('element-symbol').value.trim();
    if (userSymbol.toLowerCase() === elements[currentElement].toLowerCase()) {
        document.getElementById('feedback').textContent = 'Correct! 🎉';
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The symbol for ${currentElement} is ${elements[currentElement]}.`;
    }
}

// Generate the first element when the page loads
generateElement();
