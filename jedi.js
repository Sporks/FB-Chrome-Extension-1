var elements = document.getElementsByTagName('*');
var fb_nav_class = document.getElementById('blueBarNAXAnchor');
for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];
      console.log(element.value)
      if (node.nodeType === 3) {
         var text = node.nodeValue;
         var replacedText = text.replace(/facebook/gi, "Jedibook");
         if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
         }
      }
   }
}
fb_nav_class.style.backgroundImage = "linear-gradient(rgba(55,132,214,1) 0%,rgba(254,254,254,1) 30%,rgba(254,254,254,1) 47%,rgba(254,254,254,1) 71%,rgba(55,132,214,1) 100%)"

// "What's on your mind"
var status_Text_Placeholder = document.getElementById('u_0_y')[0];
status_Text_Placeholder.placeholder = "Try not. Do… or do not. There is no try.";


// };
// changeFacebookText("theMe")
// });