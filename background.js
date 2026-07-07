chrome.runtime.onMessage.addListener((message, sender) => {

    if(message.action==="catify"){

        chrome.tabs.sendMessage(sender.tab.id,{
            action:"catify"
        });

    }

    if(message.action==="restore"){

        chrome.tabs.sendMessage(sender.tab.id,{
            action:"restore"
        });

    }

});