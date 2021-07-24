var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv =document.querySelector("#output");

var serverURL= "http://127.0.0.1:5500/index.html"

   function getTranslationURL(text){
       return serverURL + "?" + "text" + text
   }

function clickEventHandler(){ 
    
    // outputDiv.innerText = 'nvjdjvbs' + txtInput.value;
    var inputText = txtInput.Value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => console.log(json))
    
};
  
btnTranslate.addEventListener("click", clickEventHandler)






  



// querySelector() ---for reference---
// addEventLisner() ---for event---
// click , input
// .value  for reading
// .innerText for put something