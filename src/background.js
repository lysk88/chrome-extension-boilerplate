chrome.runtime.onMessage.addListener((message, sender, callback) => {
    console.log("Background got a message!", message);
    callback({greeting: "hello from background!"});
})