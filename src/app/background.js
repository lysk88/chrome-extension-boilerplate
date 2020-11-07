chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Background got a message!", message);
    sendResponse({greeting: "hello from background!"});
})