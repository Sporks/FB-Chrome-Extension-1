
var elements = document.getElementsByTagName('*');
// alert("element2");
// $(".cat-item").remove();

	// console.log(element2);
	
	for (var i = 0; i < elements.length; i++) {
	    var element = elements[i];
	    for (var j = 0; j < element.childNodes.length; j++) {
	        var node = element.childNodes[j];

	        if (node.nodeType === 3) {
	            var text = node.nodeValue;
	            var replacedText = text.replace(/facebook/gi, "Jedibook");

	            if (replacedText !== text) {
	                element.replaceChild(document.createTextNode(replacedText), node);
	            }
	        }
	    }
	}
// };
// changeFacebookText("theMe")
// });