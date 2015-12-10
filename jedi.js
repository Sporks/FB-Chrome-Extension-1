var placehold = document.getElementsByName('q')[0];
placehold.placeholder = 'Search Jedibook';

var elements = document.getElementsByTagName('*');
for (var i = 0; i < elements.length; i++) {
   var element = elements[i];
   for (var j = 0; j < element.childNodes.length; j++) {
      var node = element.childNodes[j];
      //console.log(element.value)
      if (node.nodeType === 3) {
         var text = node.nodeValue;
         var replacedText = text.replace(/facebook/gi, "Jedibook");
         if (replacedText !== text) {
            element.replaceChild(document.createTextNode(replacedText), node);
         }
      }
   }
}

//
var fb_nav_class = document.getElementById('blueBarNAXAnchor');
fb_nav_class.style.backgroundImage = "linear-gradient(rgba(55,132,214,1) 0%,rgba(0,0,0,1) 30%,rgba(0,0,0,1) 47%,rgba(0,0,0,1) 71%,rgba(55,132,214,1) 100%)"

// "What's on your mind"
var status_Text_Placeholder = document.getElementById('u_0_y');
status_Text_Placeholder.placeholder = "Try not. Do… or do not. There is no try.";





var updateImages = _.throttle(function(){
   
      var counter = 0;
var arrayOfImageTags = document.getElementsByClassName('_38vo');

arrayOfImageTags[0].firstChild.src = "https://vignette3.wikia.nocookie.net/swfans/images/3/3d/LukeSkywalker.png/revision/latest?cb=20131122020255";

   
for (var key in arrayOfImageTags) {
   if (counter && !arrayOfImageTags[key].firstChild.src.startsWith('http://sporks.net/')) {
      arrayOfImageTags[key].firstChild.src = getRandomStarWarsCharacter()
   }
   counter++;
};
      
      
   }, 1000);
////////////////////////////////////////////////////////
$(document).on('DOMNodeInserted', function(e) {
   
   
   updateImages();
   
   
      //element with #someID was inserted.
    });



 $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://www.twixxies.com/css/jedi.css') );




//targets all images on the main page




function getRandomStarWarsCharacter() {
   var jedis = ['http://sporks.net/codesmith/hackathon1/C-3PO_droid.png',
'http://sporks.net/codesmith/hackathon1/Chewbacca.jpeg',
'http://sporks.net/codesmith/hackathon1/Han_Solo.jpeg',
'http://sporks.net/codesmith/hackathon1/Lando.jpeg',
'http://sporks.net/codesmith/hackathon1/Leia.jpeg',
'http://sporks.net/codesmith/hackathon1/Luke_SkyWalker.jpeg',
'http://sporks.net/codesmith/hackathon1/Naboo.jpeg',
'http://sporks.net/codesmith/hackathon1/Obi-Wan.jpeg',
'http://sporks.net/codesmith/hackathon1/Qui-Gon.jpeg',
'http://sporks.net/codesmith/hackathon1/r2d2.jpeg',
'http://sporks.net/codesmith/hackathon1/Sabe.jpeg',
   ];

   var i = Math.floor(Math.random() * 9) + 1;
   return jedis[i];
}


// };
// changeFacebookText("theMe")
// });