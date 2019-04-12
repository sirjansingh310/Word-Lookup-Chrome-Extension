console.log('popup.js running');
let bgpage = chrome.extension.getBackgroundPage();
//document.getElementById('def').innerHTML = bgpage.word;
let word = bgpage.word.toLowerCase();
console.log("Word is :"+word);
let el = document.getElementById('def');
var key = '91cd8f03a1eb590c60331596d8c0319234594ea1483482bda';
var url =
`https://api.wordnik.com/v4/word.json/${word}/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=${key}`;
if(word.length > 0){
fetch(url)
  .then(resp => resp.json())
  .then(res =>{
    console.log(res[0].text);
    var heading = el.appendChild(document.createElement('H1'));
    heading.innerHTML = word;
    var def = el.appendChild(document.createElement('P'));
    def.innerHTML = res[0].text;
    el.appendChild(document.createElement("BR"));
    if(res.length>1){
    var def2 = el.appendChild(document.createElement('P'));
    def2.innerHTML = res[1].text;
    def2.style.fontSize = "20px";
  }
    def.style.fontSize = "20px";
    el.style.width = "300px";
  })
  .catch(err => {
    console.log("error  " + err);
  });
}
