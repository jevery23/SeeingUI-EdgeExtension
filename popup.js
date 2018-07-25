let swap = document.getElementById('swapPageContent');
let reset = document.getElementById('resetToOriginal');

swap.onclick = function () {
    swap.disabled = true;
    reset.disabled = false;
    browser.tabs.update({ url: "https://de4a11y-bad-site-demo.azurewebsites.net/after.html" });
}

reset.onclick = function () {
    swap.disabled = false;
    reset.disabled = true;
    browser.tabs.update({ url: "https://de4a11y-bad-site-demo.azurewebsites.net/before.html" });
}
