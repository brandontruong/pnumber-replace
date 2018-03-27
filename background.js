

chrome.webRequest.onCompleted.addListener(function (details) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length) {
      chrome.tabs.sendMessage(tabs[0].id, { updatePNumber: true }, function (response) {
        if (response.updatePNumberCompleted) {
          console.log(response.error);
        }
      });
    }
  });
}, {
    urls: ["https://github.aus.thenational.com/*"]
  });