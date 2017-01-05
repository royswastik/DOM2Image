
console.log("hello from devtools");
chrome.devtools.panels.create("Swastik",
                              "icon.png",
                              "panel.html",
                              function(panel) { console.log("hello from callback"); });