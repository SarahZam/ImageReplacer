

let filenames = ["boi.png"];

let imgs = document.getElementsByTagName('img');

for(imgElt of imgs){
    let file = "boi.png";
    let url = chrome.extension.getURL(file);
    imgElt.src = url;
   console.log(url);
}