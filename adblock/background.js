chrome.declarativeNetRequest.updateDynamicRules({
  removeRuleIds: [1, 2, 3],
  addRules: [
    { id: 1, priority: 1, action: { type: "block" }, condition: { urlFilter: "doubleclick.net" } },
    { id: 2, priority: 1, action: { type: "block" }, condition: { urlFilter: "googlesyndication.com" } },
    { id: 3, priority: 1, action: { type: "block" }, condition: { urlFilter: "adservice.google.com" } }
  ]
});
