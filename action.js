var state = 0;   	//0 for FB, 1 for Jedi, 2 for Sith
chrome.browserAction.onClicked.addListener(function(tab) {
	// alert("OK")
	var faction;
	state = (state+1)%3;
	if(state === 1){
		chrome.browserAction.setBadgeText({text: "J"});
		chrome.browserAction.setBadgeBackgroundColor({ color: [0, 0, 255, 255] });
		chrome.tabs.executeScript(null, {file: "jedi.js"});
	}
	else if(state === 2){
		chrome.browserAction.setBadgeText({text: "S"});
		chrome.browserAction.setBadgeBackgroundColor({ color: [255,0,0,255]});
		chrome.tabs.executeScript(null, {file: "sith.js"});
	}
						//have the state cycle between 0 and 2
	else if(state === 0){
		chrome.browserAction.setBadgeText({text: ""});	
	 	chrome.browserAction.setBadgeBackgroundColor({color: [0,0,255,0]});
	 	faction = "Facebook";
	}
	changeFacebookText(faction);
})
