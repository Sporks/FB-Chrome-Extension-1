var placehold = document.getElementsByName('q')[0];
placehold.placeholder = 'Search Sithbook';


var elements = document.getElementsByTagName('*');
var fb_nav_class = document.getElementById('blueBarNAXAnchor');
for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];
      //console.log(element.value)
      if (node.nodeType === 3) {
         var text = node.nodeValue;
         var replacedText = text.replace(/jedibook/gi, "Sithbook");

         if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
         }
      }
   }
}
fb_nav_class.style.backgroundImage = "linear-gradient(rgba(229,17,21,1) 0%,rgba(0,0,0,1) 30%,rgba(0,0,0,1) 47%,rgba(0,0,0,1) 71%,rgba(229,17,21,1) 100%)";


// "What's on your mind"
var status_Text_Placeholder = document.getElementById('u_0_y');
status_Text_Placeholder.placeholder = "Good! Use your aggressive feelings, boy. Let the hate flow through you! ";


// };
// changeFacebookText("theMe")
// });