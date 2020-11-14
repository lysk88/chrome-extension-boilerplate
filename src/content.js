  
chrome.runtime.sendMessage({greeting: "hello from content!"}, (message) => {    
    console.log("Content got a message!", message);
})

