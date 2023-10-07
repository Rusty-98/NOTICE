// URLs to monitor for updates
const urlsToMonitor = [
    "https://hbtu.ac.in/dsw-circulars/",
    "https://hbtu.ac.in/academic-circular/",
    "https://hbtu.ac.in/important-links/"
];


const initialContents = {};

async function checkForUpdates() {
    for (const url of urlsToMonitor) {
        const response = await fetch(url);
        const content = await response.text();

        if (content !== initialContents[url]) {
            document.querySelector(`a[href="${url}"]`).style.color = "red";
        }
    }
}

async function storeInitialContent() {
    for (const url of urlsToMonitor) {
        const response = await fetch(url);
        const content = await response.text();
        initialContents[url] = content;
    }
}

storeInitialContent();
setInterval(checkForUpdates, 60000);

// Function to change the color of each letter
function colorizeText(elementId) {
    const textElement = document.getElementById(elementId);
    const text = textElement.textContent;
    const colors = ["red", "blue", "green", "orange", "purple"]; // Define your desired colors here
    let coloredText = "";

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        const color = colors[i % colors.length]; // Cycle through colors

        // Wrap the letter in a span with the current color
        coloredText += `<span style="color: ${color};">${letter}</span>`;
    }

    // Set the modified HTML back to the element
    textElement.innerHTML = coloredText;
}

// Function to change colors in an infinite loop
function changeColorsInfiniteLoop() {
    let iteration = 0;
    const maxIterations = 2000; // Set a maximum number of iterations (to prevent infinite loop in case)

    setInterval(function () {
        if (iteration < maxIterations) {
            colorizeText("textToColorize");
            iteration++;
        }

        // Reset iteration count when we reach the maximum number of iterations

    }, 500); // 1000 milliseconds (1 second)
}

// Call the function to start changing colors in an infinite loop
changeColorsInfiniteLoop();
