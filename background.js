console.log('ext running in background');
var word = "";
chrome.runtime.onMessage.addListener(function (request,sender,sendResponse){
  console.log(request.txt);
  word = request.txt;
});
