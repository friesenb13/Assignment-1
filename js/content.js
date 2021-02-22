console.log("extension is running!")


chrome.runtime.onMessage.addListener(
function(request) {
      var color = request.message;
      $("body").css("background", color)
  }
);


//tutorial from Coding Train https://www.youtube.com/watch?v=8zMMOdI5SOk for Image Replacement
let filenames = [
    "meme1.jpg",
    "meme2.jpg",
    "meme3.jpg",
    "gif1.gif",
    "gif2.gif",
    "gif3.gif",
    "gif4.gif",
    "gif5.gif",
    "gif6.gif",
    "gif7.gif",
    "gif8.gif",
];


let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
    let r =Math.floor(Math.random() * filenames.length);
    let file= 'images/' +filenames [r];
    let url =chrome.extension.getURL(file);
        imgElt.src = url;
    console.log(url);
}


//code from https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/ for word replacement
var elements = document.getElementsByTagName('*');



for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/pandemic/gi, 'Panoramic');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}