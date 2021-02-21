console.log("extension is running!")

//tutorial from Coding Train https://www.youtube.com/watch?v=8zMMOdI5SOk
let filenames = [
    "meme1.jpg",
    "meme2.jpg",
    "meme3.jpg",
];


let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
    let r =Math.floor(Math.random() * filenames.length);
    let file= 'images/' +filenames [r];
    let url =chrome.extension.getURL(file);
        imgElt.src = url;
    console.log(url);
}


//code from https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/
var elements = document.getElementsByTagName('*');



for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/pandemic/gi, 'panoramic');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}