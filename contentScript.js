
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.updatePNumber === true) {
      replacePNumber();
      sendResponse({ updatePNumberCompleted: true });
    }
    else if (request.greeting == "hello") {
      sendResponse({ updatePNumberCompleted: false, error: "Something happens" });
    }
  });

function replacePNumber() {
  $.each(pNumbersToReplace, function (index, value) {
    $('A:contains(' + value.pNumber + ')').addClass(value.pNumber).text(function () {
      return $(this).text().replace(value.pNumber, value.name);
    });
    $('span:contains(' + value.pNumber + ')').addClass(value.pNumber).text(function () {
      return $(this).text().replace(value.pNumber, value.name);
    });
    $('h5:contains(' + value.pNumber + ')').addClass(value.pNumber).text(function () {
      return $(this).text().replace(value.pNumber, value.name);
    });
  });

  const regex = new RegExp("[p,P][0-9]{6}"); // expression here
  const newFoundPNUmbers = $("a").filter(function () {
    return regex.test($(this).text());
  });
  if (newFoundPNUmbers.length > 0) {
    var pNumberFoundAlert = 'Please configure for these p number:\n';
    $("a").filter(function () {
      return regex.test($(this).text());
    }).each(function () {
      var newFound = $(this).text();
      if (!pNumberFoundAlert.includes(newFound)) {
        pNumberFoundAlert += newFound + '\n';
      }

    });
    console.log(pNumberFoundAlert);
  }
}
