console.log("THIS IS BACKGROUND!");

// Read it using the storage API
chrome.storage.sync.get(['foo', 'bar'], function(items) {
  message('Settings retrieved', items);
});