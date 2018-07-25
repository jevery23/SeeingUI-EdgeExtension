// listen for sendMessage() from content script
browser.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        // disable browser action for the current tab
        browser.browserAction.disable(sender.tab.id);
        console.log(`URL hit: ${request.url}`);
    }
);