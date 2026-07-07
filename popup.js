document.addEventListener("DOMContentLoaded", () => {

    const catifyBtn = document.getElementById("catify");
    const restoreBtn = document.getElementById("restore");

    catifyBtn.addEventListener("click", async () => {

        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

        chrome.tabs.sendMessage(tab.id, {
            action: "catify"
        });

        window.close();

    });

    restoreBtn.addEventListener("click", async () => {

        const [tab] = await chrome.tabs.query({
            active: true,
            currentWindow: true
        });

        chrome.tabs.sendMessage(tab.id, {
            action: "restore"
        });

        window.close();

    });

});