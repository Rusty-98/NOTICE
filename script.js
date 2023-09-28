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