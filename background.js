function onMenuClick(info, tab) {
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["SOMEReference.js"]
  });
}

var title = "Target this Element (SOME)";
browser.contextMenus.create({
  id: "someReference",
  title: title,
  contexts: ["all"]
}, () => {
  if (browser.runtime.lastError) {
    console.error(browser.runtime.lastError);
  } else {
    console.log("Context menu item created with id: someReference");
  }
});

// Listener for context menu item clicks
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "someReference") {
    onMenuClick(info, tab);
  }
});
