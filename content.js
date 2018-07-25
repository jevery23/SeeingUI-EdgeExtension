// get the URL of the page
var url = document.location.href;

// if not on demo site domain
if (url.indexOf("de4a11y-bad-site-demo.azurewebsites.net") === -1) {
    // send anything we want to change, like "disabled" appropriate icons. ATM nothing!
    browser.runtime.sendMessage({"url": url});
}