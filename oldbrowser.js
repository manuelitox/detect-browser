// get current browser
//
function getBrowser () {
	var browser = navigator.userAgent;
	return browser.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i);
}

// check if current browser is IE
// 
// @param name (string)
//
function isIE(name) {
	return name == "MSIE" ? true : false;
}

// check if version of IE <= 8
// 
// @param version (number)
//
function isIE8(version) {
	return version <= 8 ? true : false; 
}

// Old browser construct
// 
// @param browser (array)
//
var OldBrowser = function (browser) {
	this.name = browser[1];
	this.version = Number(browser[2]);
};

OldBrowser.prototype.get = function() {
	return this.name + " en la versión " + this.version;
};

OldBrowser.prototype.checkIE = function() {
	var output;

	if (isIE(this.name) && isIE8(this.version)) {
		output = "No damos soporte a la version (" + this.version + ") de Internet Explorer.";
	}

	return output;
};

OldBrowser.prototype.print = function() {
	if (isIE(this.name) && isIE8(this.version)) {
		var wrapped = document.getElementById("detect-browser");
		wrapped.className += " active";
		document.getElementById("title").innerHTML = currentBrowser.checkIE();
	}
};