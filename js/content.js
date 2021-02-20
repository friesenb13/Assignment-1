//console.log("extension is running!")
//
//$("header").after("hello from the extension")
//
//const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
//
//for (let i=0; i<text.length; i++){
//    if (text[i].innerHTML.includes('pandemic')){
//        text[i].innerHTML = text[i].innerHTML.replace('panoramic')
//    }
//}


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




// TRY: updating the text content of an element or set of elements on one or more pages

// TRY: adding a click event listener to an element that changes the background of that element to a new color

// TRY: using a mouseenter event listener to update text to something new.