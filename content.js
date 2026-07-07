const cats = [
    "cats/cat1.jpg",
    "cats/cat2.jpg",
    "cats/cat3.jpg",
    "cats/cat4.jpg",
    "cats/cat5.jpg",
    "cats/cat6.jpg",
    "cats/cat7.jpg",
    "cats/cat8.jpg"
];

// Store original image URLs
const originals = new Map();

// Replace images with cats
function catify() {

    document.querySelectorAll("img").forEach(img => {

        if (originals.has(img)) return;

        originals.set(img, img.src);

        const randomCat = cats[Math.floor(Math.random() * cats.length)];

        img.style.transition = "opacity 0.3s ease";
        img.style.opacity = "0";

        img.onload = () => {
            img.style.opacity = "1";
        };

        img.removeAttribute("srcset");
        img.removeAttribute("sizes");

        img.src = chrome.runtime.getURL(randomCat);

    });

}

// Restore original images
function restore() {

    document.querySelectorAll("img").forEach(img => {

        if (!originals.has(img)) return;

        img.style.transition = "opacity 0.3s ease";
        img.style.opacity = "0";

        img.onload = () => {
            img.style.opacity = "1";
        };

        img.src = originals.get(img);

    });

}

// Listen for popup messages
chrome.runtime.onMessage.addListener((message) => {

    if (message.action === "catify") {
        catify();
    }

    if (message.action === "restore") {
        restore();
    }

});