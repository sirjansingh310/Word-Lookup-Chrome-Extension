console.log('extention running!!')
window.addEventListener('mouseup',() => {
  console.log('in mouse up event handler');
  var selection = window.getSelection().toString();
  console.log(window.getSelection().toString());
  if(selection.length > 0){
    let message = {
      txt: selection
    }
    chrome.runtime.sendMessage(message);
  }
});
